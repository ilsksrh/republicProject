package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.NewsCommentDto;
import org.example.model.entity.NewsComment;
import org.example.repository.NewsCommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class NewsCommentService {
    private final NewsCommentRepository repository;
    public String addNewsComment(NewsCommentDto dto){
        return "added";
    }
    public List<NewsComment> getAllNewsComments(){
        return repository.findAll();
    }
    public NewsComment getNewsCommentById(Long id){
        return repository.getById(id);
    }
}
