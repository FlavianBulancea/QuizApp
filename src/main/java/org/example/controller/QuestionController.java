package org.example.controller;

import org.example.dto.QuestionDto;
import org.example.exception.question.NoQuestionFoundException;
import org.example.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping
    private ResponseEntity<List<QuestionDto>> getByCategoriesIdOrAll(
            @RequestParam(name = "pn", defaultValue = "0") Integer pageNr,
            @RequestParam(name = "ps", defaultValue = "10") Integer pageSize,
            @RequestBody(required = false) List<Long> ids) {

        try {
            return new ResponseEntity<>
                    (questionService.getByCategoriesIdOrAll
                            (ids, pageNr, pageSize), HttpStatus.OK);
        } catch (NoQuestionFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
