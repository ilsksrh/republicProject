package org.example.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Table(name="post")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @Column(name = "content")
    private String content;
    @OneToOne
    @JoinColumn(name="image_id")
    private Image image;
    @OneToMany(mappedBy = "post")
    private List<PostLike> postLikeList;
    @OneToMany(mappedBy = "post")
    private List<PostComment> postCommentList;
}
//    @OneToOne
//    @JoinColumn(name = "status_id", referencedColumnName = "id")
//    private Status status;
