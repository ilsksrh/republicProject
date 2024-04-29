package org.example.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TreatmentDto {
    private Long id;

    @NotNull(message = "ID животного не может быть пустым")
    private Long animalId;

    @NotBlank(message = "Описание лечения не может быть пустым")
    private String description;

    @NotNull(message = "Дата регистрации не может быть пустой")
    private LocalDateTime dateRegistration;

    @NotNull(message = "Дата завершения не может быть пустой")
    private LocalDateTime dateCompletion;

    @NotNull(message = "Сумма платежа не может быть пустой")
    private BigDecimal paymentAmount;
}
