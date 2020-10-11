package org.example.service;

import org.example.dto.AnswerDto;
import org.example.exception.answer.NoAnswerFoundException;
import org.example.mapper.AnswerMapper;
import org.example.model.Answer;
import org.example.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private AnswerMapper answerMapper;

    public List<Answer> getAll(Integer pageNr, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNr, pageSize);
        return answerRepository.findAll(pageable).toList();
    }

    public List<AnswerDto> getAllByQuestionId(Long questionId) throws NoAnswerFoundException {
        List<Answer> answers = answerRepository.findAllByQuestionId(questionId);

        if (answers.size() == 0)
            throw new NoAnswerFoundException();

        return answers.stream()
                .map(answer -> answerMapper.modelToDto(answer))
                .collect(Collectors.toList());
    }
}
