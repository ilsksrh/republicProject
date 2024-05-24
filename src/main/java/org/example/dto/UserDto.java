package org.example.dto;

import lombok.*;
import org.example.validate.StrongPassword;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    @StrongPassword
    private String password;
    private MultipartFile avatarFile;
    private String gender;
}
