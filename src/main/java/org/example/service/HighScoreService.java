package org.example.service;

import org.example.model.HighScore;
import org.example.repository.HighScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class HighScoreService {

    @Autowired
    private HighScoreRepository highScoreRepository;

    public List<HighScore> getHighScores(){

        List<HighScore> highScores = new ArrayList<>();
        Iterable<HighScore> highScoreIterable = highScoreRepository.findAll();

        highScoreIterable.forEach(highScores::add);

        return highScores;
    }
}
