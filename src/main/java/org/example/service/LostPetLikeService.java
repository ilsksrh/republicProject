package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.LostPetLikeDto;
import org.example.model.entity.LostPetLike;
import org.example.repository.LostPetLikeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LostPetLikeService {
    private final LostPetLikeRepository repository;
    public String addLostPetComment(LostPetLikeDto dto){
        return "added";
    }
    public List<LostPetLike> getAllLostPetLikes(){
        return repository.findAll();
    }
    public LostPetLike getLostPetLikeById(Long id){
        return repository.getById(id);
    }
}
