package org.example.service;

import org.example.mapper.QuestionMapper;
import org.example.model.Question;
import org.example.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private QuestionMapper questionMapper;

    public List<Question> get10RandomQuestions(){

        List<Question> questions = new ArrayList<>();
        Iterable<Question> questionIterable = questionRepository.findAll();

        questionIterable.forEach(questions::add);

        return questions;
    }
}
