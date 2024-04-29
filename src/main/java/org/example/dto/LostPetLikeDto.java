package org.example.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LostPetLikeDto {
    private Long id;

    @NotNull(message = "ID пользователя не может быть пустым")
    private Long userId;

    @NotNull(message = "ID потерянного питомца не может быть пустым")
    private Long lostPetId;
}
