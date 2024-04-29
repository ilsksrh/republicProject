package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.NewsLikeDto;
import org.example.model.entity.NewsLike;
import org.example.repository.NewsLikeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class NewsLikeService {
    private final NewsLikeRepository repository;
    public String addNewsLike(NewsLikeDto dto){
        return "added";
    }
    public List<NewsLike> getAllNewsLikes(){
        return repository.findAll();
    }
    public NewsLike getNewsLikeById(Long id){
        return repository.getById(id);
    }
}
