package org.example.service;

import io.minio.errors.*;
import lombok.AllArgsConstructor;
import org.example.dto.PostDto;
import org.example.dto.PostResponseDto;
import org.example.model.entity.Image;
import org.example.model.entity.Post;
import org.example.repository.PostRepository;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository repository;
    private final UserService userService;
    private final ImageService imageService;
    public String addPost(PostDto postDto) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException, ChangeSetPersister.NotFoundException {
        Post post = new Post();
        post.setUser(userService.getUserById(postDto.getUserId()));
        post.setContent(postDto.getContent());
        post.setImage(imageService.getImageById(imageService.upload(postDto.getFile())));
        repository.save(post);
        return "Added";
    }
    public List<Object> getAllPosts() throws IOException {
        List<Object> posts = repository.findAllPostsWithUserData();
        return posts;
    }
    public String deletePost(Long id){
        Post post = repository.findById(id).get();
        Image image = post.getImage();
        repository.deleteById(id);
        if (image != null) {
            imageService.deleteImage(image);
        }
        return "deleted";
    }
}
