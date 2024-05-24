package org.example.service;

import io.minio.*;
import io.minio.errors.*;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.apache.commons.io.output.ByteArrayOutputStream;
import org.example.model.entity.Image;
import org.example.repository.ImageRepository;
import org.example.service.props.MinioProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.InvalidParameterException;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final MinioClient minioClient;
    private final MinioProperties minioProperties;
    private final ImageRepository imageRepository;

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

        Image image = new Image();
        image.setName(fileName);
        image.setType(file.getContentType());
        imageRepository.save(image);
        return image.getId();
    }

    public byte[] getImage(String fileName) throws IOException {
        try {
            InputStream inputStream = minioClient.getObject(
                    GetObjectArgs.builder()
                            .bucket(minioProperties.getBucket())
                            .object(fileName)
                            .build());

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            return outputStream.toByteArray();
        } catch (ErrorResponseException e) {
            // Handle error when file not found
            throw new IOException("Image not found: " + fileName, e);
        } catch (Exception e) {
            // Handle other MinIO errors
            throw new IOException("Failed to get image from MinIO: " + fileName, e);
        }
    }

    public void deleteImage(Image image) {
        try {
            minioClient.removeObject(
                    RemoveObjectArgs.builder()
                            .bucket(minioProperties.getBucket())
                            .object(image.getName())
                            .build());
            imageRepository.delete(image);
        } catch (Exception e) {
            throw new RuntimeException("Failed to delete image from MinIO", e);
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
    public Image getImageById(Long postImageId) {
        return imageRepository.findById(postImageId).get();
    }
}
