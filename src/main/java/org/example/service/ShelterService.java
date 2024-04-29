package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.ShelterDto;
import org.example.model.entity.Shelter;
import org.example.repository.ShelterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ShelterService {
    private final ShelterRepository repository;
    public String addShelter(ShelterDto dto){;
        return "added";
    }
    public List<Shelter> getAllShelters(){
        return repository.findAll();
    }
    public Shelter getShelterById(Long id){
        return repository.getById(id);
    }
}
