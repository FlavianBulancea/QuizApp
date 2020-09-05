package org.example.repository;

import org.example.model.HighScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface HighScoreRepository extends JpaRepository<HighScore, Long> {

}
