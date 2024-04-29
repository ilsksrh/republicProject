package org.example.model.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Table(name = "treatment")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Treatment {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "animal_id")
    private Animal animal;
    @Column(name="description")
    private String description;
    @Column(name="date_registration")
    private LocalDateTime dateRegistration;
    @Column(name="date_completion")
    private LocalDateTime dateCompletion;
    @Column(name="payment_amount")
    private BigDecimal paymentAmount;
}