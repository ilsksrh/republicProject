package org.example.payload;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.example.validate.PasswordMatching;
import org.example.validate.StrongPassword;

@Data
@NoArgsConstructor
@AllArgsConstructor
@PasswordMatching(
        password = "password",
        confirmPassword = "confirmPassword",
        message = "Password and Confirm Password must be matched!"
)
public class SignUpRequest {
    @NotBlank(message = "Имя пользователя не может быть пустым")
    private String username;

    @NotBlank(message = "Email не может быть пустым")
    @Email(message = "Email должен быть корректным")
    private String email;

    @StrongPassword
    private String password;

    private String confirmPassword;

}
