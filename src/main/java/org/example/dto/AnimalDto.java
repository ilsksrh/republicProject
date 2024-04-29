package org.example.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AnimalDto {
    private long id;

    @NotBlank(message = "Прозвище не может быть пустым")
    private String nickname;

    @NotBlank(message = "Вид не может быть пустым")
    private String species;

    @NotBlank(message = "Порода не может быть пустой")
    private String breed;

    @NotBlank(message = "Пол не может быть пустым")
    private String gender;

    @NotBlank(message = "Цвет не может быть пустым")
    private String color;

    @PositiveOrZero(message = "Возраст должен быть нулевым или положительным")
    private int age;

    @NotNull(message = "ID пользователя не может быть пустым")
    private Long userId;

    @NotNull(message = "ID приюта не может быть пустым")
    private Long shelterId;
}
