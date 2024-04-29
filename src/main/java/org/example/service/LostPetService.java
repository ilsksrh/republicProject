package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.LostPetDto;
import org.example.model.entity.LostPet;
import org.example.repository.LostPetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LostPetService {
    private final LostPetRepository repository;
    public String addLostPet(LostPetDto dto){
        return "added";
    }
    public List<LostPet> getAllLostPets(){
        return repository.findAll();
    }
    public LostPet getLostPetById(Long id){
        return repository.getById(id);
    }
}
