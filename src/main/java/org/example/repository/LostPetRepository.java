package org.example.repository;

import org.example.model.entity.LostPet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LostPetRepository extends JpaRepository<LostPet, Long> {

}
