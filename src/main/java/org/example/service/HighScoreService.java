package org.example.service;

import org.example.dto.HighScoreDto;
import org.example.exception.highScore.NoHighScoreFoundException;
import org.example.exception.highScore.NoNameInsertedException;
import org.example.mapper.HighScoreMapper;
import org.example.model.HighScore;
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

    public HighScoreDto save(HighScoreDto highScoreDto) throws NoNameInsertedException {

        if (highScoreDto.getUsername() == null)
            throw new NoNameInsertedException();
        HighScore highScore = highScoreMapper.dtoToModel(highScoreDto);
        highScore = highScoreRepository.save(highScore);
        return highScoreMapper.modelToDto(highScore);
    }
}
