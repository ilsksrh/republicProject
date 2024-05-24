package org.example.repository;

import org.example.model.entity.Logger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoggerRepository extends JpaRepository<Logger,Long> {

}
