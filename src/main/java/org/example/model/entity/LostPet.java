package org.example.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Table(name="lost_pet")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LostPet {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;
    @OneToOne
    @JoinColumn(name="animal_id", referencedColumnName = "id")
    private Animal animal;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_id")
    private User user;
    @Column(name = "date_of_accident")
    private LocalDateTime dateOfAccident;
    @Column(name = "place_off_oss")
    private String placeOffOss;
    @Column(name = "addditional_information")
    private String addditionalInformation;
    @Column(name = "circumstances_of_loss")
    private String circumstancesOfLoss;
    @Column(name = "found")
    private boolean found;
    @Column(name = "found_comment")
    private String foundComment;
    @OneToMany(mappedBy = "lostPet")
    private List<LostPetLike> lostPetLikeList;
    @OneToMany(mappedBy = "lostPet")
    private List<LostPetComment> lostPetCommentList;

}

