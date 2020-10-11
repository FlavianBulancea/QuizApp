package org.example.controller;

import org.example.dto.AnswerDto;
import org.example.exception.answer.NoAnswerFoundException;
import org.example.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping("/{questionId}")
    private ResponseEntity<List<AnswerDto>> getAllByQuestion(@PathVariable Long questionId) {

        try {
            return new ResponseEntity<>
                    (answerService.getAllByQuestionId(questionId), HttpStatus.OK);
        } catch (NoAnswerFoundException e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
