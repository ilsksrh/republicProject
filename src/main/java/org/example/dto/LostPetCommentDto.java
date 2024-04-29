package org.example.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LostPetCommentDto {
    private Long id;

    @NotNull(message = "ID пользователя не может быть пустым")
    private Long userId;

    @NotNull(message = "ID потерянного питомца не может быть пустым")
    private Long lostPetId;

    @NotBlank(message = "Комментарий не может быть пустым")
    private String content;

    private LocalDateTime createdAtDate;
}
