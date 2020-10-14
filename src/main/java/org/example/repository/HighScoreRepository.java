package org.example.repository;

import org.example.model.HighScore;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HighScoreRepository extends JpaRepository<HighScore, Long> {

    List<HighScore> findFirst10ByScore(Pageable pageable, Long score);
}
