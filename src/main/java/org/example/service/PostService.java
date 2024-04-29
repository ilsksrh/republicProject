package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.PostDto;
import org.example.model.entity.Post;
import org.example.repository.PostRepository;
import org.example.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository repository;
    private final UserService userService;

    public String addPost(PostDto postDto) {
        Post post = new Post();
        post.setUser(userService.getUserById(postDto.getUserId()));
        post.setContent(postDto.getContent());
        post.setImage(postDto.getImage());
        repository.save(post);
        return "Added";
    }

    public List<Object> getAllPosts() {
        return repository.findAllPostsWithUsernameAndAvatar();
    }

    public Post getPostById(Long id) {
        return repository.getById(id);
    }
}
