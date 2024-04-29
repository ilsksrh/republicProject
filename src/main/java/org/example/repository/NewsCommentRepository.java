package org.example.repository;


import org.example.model.entity.NewsComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsCommentRepository extends JpaRepository<NewsComment,Long> {
}
