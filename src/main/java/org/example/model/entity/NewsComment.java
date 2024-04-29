package org.example.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Table(name="news_comment")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NewsComment {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "news_id", referencedColumnName = "id")
    private News news;
    @Column(name = "content")
    private String content;
    @Column(name = "created_at_date")
    private LocalDateTime createdAtDate;
}
