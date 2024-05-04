package org.example.service;

import io.minio.*;
import io.minio.errors.*;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.example.model.entity.PostImage;
import org.example.repository.PostImageRepository;
import org.example.service.props.MinioProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.InvalidParameterException;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PostImageService {
    private final MinioClient minioClient;
    private final MinioProperties minioProperties;
    private final PostImageRepository postImageRepository;

    public Long upload(MultipartFile file) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
        createBucket();
        if (file.isEmpty() && file.getOriginalFilename() == null) {
            throw new InvalidParameterException("File is empty");
        }
        String fileName = generateFilename(file);
        InputStream inputStream;
        try {
            inputStream = file.getInputStream();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        saveImage(inputStream, fileName);

        PostImage postImage = new PostImage();
        postImage.setName(fileName);
        postImage.setType(file.getContentType());
        postImage.setData(inputStream.readAllBytes());
        postImageRepository.save(postImage);
        return postImage.getId();
    }

    public InputStream getImage(String fileName) {
        try {
            return minioClient.getObject(
                    GetObjectArgs.builder()
                            .bucket(minioProperties.getBucket())
                            .object(fileName)
                            .build());
        } catch (Exception e) {
            throw new RuntimeException("Failed to get image from MinIO", e);
        }
    }

    @SneakyThrows
    private void createBucket() {
        boolean found = minioClient.bucketExists(BucketExistsArgs.builder().bucket(minioProperties.getBucket()).build());

        if (!found) {
            minioClient.makeBucket(MakeBucketArgs.builder().bucket(minioProperties.getBucket()).build());
        }
    }

    private String generateFilename(MultipartFile file) {
        String extension = getExtension(file);
        return UUID.randomUUID() + "." + extension;
    }

    private String getExtension(MultipartFile file) {
        return file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1);
    }

    private void saveImage(InputStream inputStream, String fileName) throws IOException, ServerException, InsufficientDataException, ErrorResponseException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
        minioClient.putObject(
                PutObjectArgs.builder()
                        .bucket(minioProperties.getBucket())
                        .object(fileName)
                        .stream(inputStream, inputStream.available(), -1)
                        .build());
    }
    public PostImage getPostImageById(Long postImageId) {
        return postImageRepository.findById(postImageId).get();
    }
}
