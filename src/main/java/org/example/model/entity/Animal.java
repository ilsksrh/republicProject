package org.example.model.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Table(name="animal")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Animal {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;
    @Column(name="nickname")
    private String nickname;
    @Column(name="species")
    private String species;
    @Column(name="breed")
    private String breed;
    @Column(name="gender")
    private String gender;
    @Column(name="color")
    private String color;
    @Column(name="age")
    private int age;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "shelter_id", referencedColumnName = "id")
    private Shelter shelter;
    @OneToMany(mappedBy = "animal")
    private List<Treatment> treatment;
}
