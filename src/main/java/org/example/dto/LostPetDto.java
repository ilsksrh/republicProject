package org.example.dto;

import lombok.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LostPetDto {
    private Long id;
    private Long animalId;
    private LocalDateTime dateOfAccident;
    private String placeOffOss;
    private String additionalInformation;
    private String circumstancesOfLoss;
    private boolean found;
    private String foundComment;
}
