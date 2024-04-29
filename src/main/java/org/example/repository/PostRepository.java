package org.example.repository;

import org.example.model.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    @Query("SELECT p, u.username, u.avatar FROM Post p JOIN p.user u")
    List<Object> findAllPostsWithUsernameAndAvatar();
}
