package org.example.repository;

import org.example.model.entity.LostPetLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LostPetLikeRepository extends JpaRepository<LostPetLike,Long> {

}
