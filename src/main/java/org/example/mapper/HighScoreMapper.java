package org.example.mapper;

import org.example.dto.HighScoreDto;
import org.example.model.HighScore;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface HighScoreMapper {

    HighScore dtoToModel(HighScoreDto dto);

    HighScoreDto modelToDto(HighScore highScore);
}
