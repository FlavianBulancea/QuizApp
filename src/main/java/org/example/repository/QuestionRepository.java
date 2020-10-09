package org.example.repository;

import org.example.model.Category;
import org.example.model.Question;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    //List<Question> findAllByCategories(Pageable pageable, List<Category> categories);

    List<Question> findAllByCategory(Pageable pageable, String category);
}
