package org.example.controller;

import org.example.dto.HighScoreDto;
import org.example.dto.UserDto;
import org.example.exception.HighScore.NoHighScoreFoundException;
import org.example.exception.User.NoUserFoundException;
import org.example.service.HighScoreService;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/highscore")
public class HighScoreController {

    @Autowired
    private HighScoreService highScoreService;



    @GetMapping("/all")
    public ResponseEntity<List<HighScoreDto>> getAll(){

        try {
            return new ResponseEntity<>(highScoreService.getAll(), new HttpHeaders(), HttpStatus.OK);
        } catch (NoHighScoreFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
