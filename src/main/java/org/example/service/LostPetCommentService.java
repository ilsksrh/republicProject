package org.example.service;

import lombok.AllArgsConstructor;
import lombok.Builder;
import org.example.dto.LostPetCommentDto;
import org.example.model.entity.LostPetComment;
import org.example.repository.LostPetCommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Builder
@AllArgsConstructor
public class LostPetCommentService {
    private final LostPetCommentRepository repository;
    public String addLostPetComment(LostPetCommentDto dto){
        return "added";
    }
    public List<LostPetComment> getAllLostPetComments(){
        return repository.findAll();
    }
    public LostPetComment getLostPetCommentById(Long id){
        return repository.getById(id);
    }
}
