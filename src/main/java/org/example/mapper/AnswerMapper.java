package org.example.mapper;

import org.example.dto.AnswerDto;
import org.example.model.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mappings({@Mapping(source = "id", target = "question.id")})
    Answer dtoToModel(AnswerDto dto);

    @Mappings({@Mapping(source = "question.id", target = "id")})
    AnswerDto modelToDto(Answer answer);
}
