package org.example.repository;

import org.example.model.Answer;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findAllByQuestion(Pageable pageable, String question);
}
