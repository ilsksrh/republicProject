package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.PostCommentDto;
import org.example.model.entity.PostComment;
import org.example.repository.PostCommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PostCommentService {
    private final PostCommentRepository repository;
    public String addPostComment(PostCommentDto dto){
        return "added";
    }
    public List<PostComment> getAllPostComments(){
        return repository.findAll();
    }
    public PostComment getPostCommentById(Long id){
        return repository.getById(id);
    }
}
