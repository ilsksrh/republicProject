package org.example.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewsDto {
    private long id;

    @NotNull(message = "ID приюта не может быть пустым")
    private Long shelterId;

    @NotBlank(message = "Заголовок не может быть пустым")
    private String title;

    @NotBlank(message = "Содержание новости не может быть пустым")
    private String content;

    private String image;
}
