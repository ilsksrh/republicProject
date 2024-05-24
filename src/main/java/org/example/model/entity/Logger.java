package org.example.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Logger {
    @Id
    @GeneratedValue
    private Long id;
    private String request;
    private String response;
    private LocalDateTime createdAt;
}
