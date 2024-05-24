package org.example.dto;

import lombok.Data;
import org.example.model.entity.Post;

import java.util.ArrayList;
import java.util.List;

@Data
public class UserResponseDto {
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String imageData;
    private String gender;
    private List<Post> postList;
    public UserResponseDto(Long userId, String email,String username, String firstName, String gender,String lastName, String role, String imageData,List<Post> postList) {
        this.id = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.gender = gender;
        this.imageData = imageData;
        this.postList = postList;
    }
}
