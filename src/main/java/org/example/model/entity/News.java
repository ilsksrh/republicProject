package org.example.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Table(name="news")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class News {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "shelter_id", referencedColumnName = "id")
    private Shelter shelter;
    @Column(name = "title")
    private String title;
    @Column(name = "content")
    private String content;
    @Column(name = "image")
    private String image;
    @OneToMany(mappedBy = "news")
    private List<NewsLike> newsLikeList;
    @OneToMany(mappedBy = "news")
    private List<NewsComment> newsCommentList;

}
