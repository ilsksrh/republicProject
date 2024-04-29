package org.example.service;

import lombok.AllArgsConstructor;
import org.example.model.entity.User;
import org.example.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository repository;
    public List<User> getAllUsers(){
        return repository.findAll();
    }
    public User getUserById(Long id){
        return repository.findById(id).get();
    }
}
