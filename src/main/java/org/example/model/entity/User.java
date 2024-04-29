package org.example.model.entity;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "user_client",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;
    @Column(name="username")
    private String username;
    @Column(name="first_name")
    private String firstName;
    @Column(name="last_name")
    private String lastName;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;
    @ManyToMany(fetch = FetchType.LAZY)
    @JsonIgnore
   @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;
    @Column(name="avatar")
    private String avatar;
    @Column(name="gender")
    private String gender;
    @OneToMany(mappedBy = "user")
    private List<Animal> animalList;
    @OneToMany(mappedBy = "user")
    private List<Post> postList;
    @OneToMany(mappedBy = "user")
    private List<PostLike> postLikeList;
    @OneToMany(mappedBy = "user")
    private List<PostComment> postCommentList;
    @OneToMany(mappedBy = "user")
    private List<NewsLike> newsLikeList;
    @OneToMany(mappedBy = "user")
    private List<NewsComment> newsCommentList;
    @OneToMany(mappedBy = "user")
    private List<LostPet> lostPetList;
    @OneToMany(mappedBy = "user")
    private List<LostPetLike> lostPetLikeList;
    @OneToMany(mappedBy = "user")
    private List<LostPetComment> lostPetCommentList;
    public User(String username,String email,String password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
}

