package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.NewsDto;
import org.example.model.entity.News;
import org.example.repository.NewsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class NewsService {
    private final NewsRepository repository;
    public String addNews(NewsDto dto){
        return "added";
    }
    public List<News> getAllNews(){
        return repository.findAll();
    }
    public News getNewsById(Long id){
        return repository.getById(id);
    }
}
