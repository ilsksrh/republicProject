package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.NewsLikeDto;
import org.example.model.entity.PostLike;
import org.example.repository.PostLikeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PostLikeService {
    private final PostLikeRepository repository;
    public String addPostLike(NewsLikeDto dto){
        return "added";
    }
    public List<PostLike> getAllPostLikes(){
        return repository.findAll();
    }
    public PostLike getPostLikeById(Long id){
        return repository.getById(id);
    }
}
