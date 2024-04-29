package org.example.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewsCommentDto {
    private Long id;

    @NotNull(message = "ID пользователя не может быть пустым")
    private Long userId;

    @NotNull(message = "ID новости не может быть пустым")
    private Long newsId;

    @NotBlank(message = "Комментарий не может быть пустым")
    private String content;

    private LocalDateTime createdAtDate;
}
