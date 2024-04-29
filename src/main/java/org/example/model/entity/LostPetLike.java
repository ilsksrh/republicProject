package org.example.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Table(name="lost_pet_like")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LostPetLike {
    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "lost_pet_id", referencedColumnName = "id")
    private LostPet lostPet;
}
