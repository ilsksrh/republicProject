package org.example.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShelterDto {
    private Long id;

    @NotBlank(message = "Название приюта не может быть пустым")
    private String name;

    @NotBlank(message = "Адрес приюта не может быть пустым")
    private String address;

    @NotBlank(message = "Email приюта не может быть пустым")
    @Email(message = "Email должен быть корректным")
    private String email;

    @NotBlank(message = "Пароль приюта не может быть пустым")
    private String password;

    private List<WorkTimeDto> worktimesList;
    private List<AnimalDto> animalsList;
}
