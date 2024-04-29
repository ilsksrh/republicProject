package org.example.service;

import lombok.AllArgsConstructor;
import org.example.dto.AnimalDto;
import org.example.model.entity.Animal;
import org.example.model.entity.Shelter;
import org.example.model.entity.User;
import org.example.repository.AnimalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AnimalService {
    private final AnimalRepository repository;
    private final UserService userService;
    private final ShelterService shelterService;

    public String addAnimal(AnimalDto dto){
        Animal animal = new Animal();
        animal.setNickname(dto.getNickname());
        animal.setSpecies(dto.getSpecies());
        animal.setBreed(dto.getBreed());
        animal.setGender(dto.getGender());
        animal.setColor(dto.getColor());
        User user = userService.getUserById(dto.getUserId());
        animal.setUser(user);
        Shelter shelter = shelterService.getShelterById(dto.getShelterId());
        animal.setShelter(shelter);
        repository.save(animal);
        return "added";
    }

    public List<Animal> getAllAnimals(){
        return repository.findAll();
    }
    public Animal getAnimalById(Long id){
        return repository.getById(id);
    }
}
