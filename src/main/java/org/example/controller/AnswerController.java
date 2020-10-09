package org.example.controller;

import org.example.dto.AnswerDto;
import org.example.exception.answer.NoAnswerFoundException;
import org.example.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/answer")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping
    private ResponseEntity<List<AnswerDto>> getAllByQuestion(
            @RequestParam(name = "pn", defaultValue = "0") Integer pageNr,
            @RequestParam(name = "ps", defaultValue = "10") Integer pageSize,
            @RequestParam(name = "question") String question) {

        try {
            return new ResponseEntity<>
                    (answerService.getAllByQuestion(question, pageNr, pageSize), HttpStatus.OK);
        } catch (NoAnswerFoundException e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
