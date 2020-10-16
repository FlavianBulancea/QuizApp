package org.example.service;

import org.example.dto.HighScoreDto;
import org.example.exception.highScore.NoHighScoreFoundException;
import org.example.exception.QuizAppException;
import org.example.mapper.HighScoreMapper;
import org.example.repository.HighScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HighScoreService {

    @Autowired
    private HighScoreRepository highScoreRepository;
    @Autowired
    private HighScoreMapper highScoreMapper;

    public List<HighScoreDto> getFirst10() throws NoHighScoreFoundException {

        List<HighScoreDto> highScoreDtoList = highScoreRepository.findTop10ByOrderByScoreDesc().stream()
                .map(highScores -> highScoreMapper.modelToDto(highScores))
                .collect(Collectors.toList());

        if (highScoreDtoList.size() == 0)
            throw new NoHighScoreFoundException();

        return highScoreDtoList;
    }

    public HighScoreDto save(HighScoreDto highScoreDto){
        return save(highScoreDto);
    }
}
