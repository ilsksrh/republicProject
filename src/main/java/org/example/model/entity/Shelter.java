package org.example.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Table(name="shelter")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Shelter {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @OneToMany(mappedBy = "shelter")
    private List<WorkTime> worktimeList;
    @OneToMany(mappedBy = "shelter")
    private List<Animal> animalList;
}
