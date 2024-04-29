package org.example.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Table(name="news_like")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NewsLike {
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
    @JoinColumn(name = "news_id", referencedColumnName = "id")
    private News news;
}
