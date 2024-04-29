package org.example.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {
    private long id;

    @NotNull(message = "ID пользователя не может быть пустым")
    private long userId;
    @NotBlank(message = "Содержание поста не может быть пустым")
    private String content;
    private String image;
}
