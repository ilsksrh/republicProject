package org.example.service;

import io.minio.errors.*;
import lombok.AllArgsConstructor;
import org.example.dto.PostDto;
import org.example.model.entity.Post;
import org.example.model.entity.PostImage;
import org.example.repository.PostRepository;
import org.example.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository repository;
    private final UserService userService;
    private final PostImageService postImageService;
    public String addPost(PostDto postDto) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
        Post post = new Post();
        post.setUser(userService.getUserById(postDto.getUserId()));
        post.setContent(postDto.getContent());
        post.setPostImage(postImageService.getPostImageById(postImageService.upload(postDto.getFile())));
        repository.save(post);
        return "Added";
    }
    public List<Object> getAllPosts() {
        return repository.findAllPostsWithUsernameAndAvatar();
    }

}
