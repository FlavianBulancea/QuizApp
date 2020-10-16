package org.example.controller;

import org.example.dto.HighScoreDto;
import org.example.exception.highScore.NoHighScoreFoundException;
import org.example.exception.QuizAppException;
import org.example.service.HighScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/highScores")
public class HighScoreController {

    @Autowired
    private HighScoreService highScoreService;



    @GetMapping("/first10")
    public ResponseEntity<List<HighScoreDto>> getAll(){

        try {
            return new ResponseEntity<>(highScoreService.getFirst10(), new HttpHeaders(), HttpStatus.OK);
        } catch (NoHighScoreFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @PostMapping
    public ResponseEntity<HighScoreDto> save(@RequestBody HighScoreDto highScoreDto){
        return new ResponseEntity<>(highScoreService.save(highScoreDto), HttpStatus.OK);
    }
}
