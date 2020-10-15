package org.example.service;

import org.example.dto.QuestionDto;
import org.example.exception.question.NoQuestionFoundException;
import org.example.mapper.QuestionMapper;
import org.example.model.Question;
import org.example.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private QuestionMapper questionMapper;

    public List<Question> getAll(Integer pageNr, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNr, pageSize);
        return questionRepository.findAll(pageable).toList();
    }

    public List<Question> getByCategoriesId(List<Long> categoriesId, Integer pageNr, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNr, pageSize);
        return questionRepository.findAllByCategoryIdIn(pageable, categoriesId);
    }

    public List<QuestionDto> getByCategoriesIdOrAll
            (List<Long> categoriesId, Integer pageNr, Integer pageSize) throws NoQuestionFoundException {

        List<Question> questions;

        if (categoriesId == null) {
            questions = getAll(pageNr, pageSize);
        } else {
            questions = getByCategoriesId(categoriesId, pageNr, pageSize);
        }

        List<QuestionDto> questionDtoList = questions.stream()
                .map(question -> questionMapper.modelToDto(question))
                .collect(Collectors.toList());

        if (questionDtoList.size() == 0) throw new NoQuestionFoundException();

        Collections.shuffle(questionDtoList);

        return questionDtoList;
    }
}
