package org.example.repository;


import org.example.model.entity.NewsLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsLikeRepository extends JpaRepository<NewsLike,Long> {
}
