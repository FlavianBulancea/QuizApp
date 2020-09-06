package org.example.mapper;

import org.example.dto.QuestionDto;
import org.example.model.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    @Mappings({@Mapping(source = "categoryId", target = "category.id")})
    Question dtoToModel(QuestionDto dto);

    @Mappings({@Mapping(source = "category.id", target = "categoryId")})
    QuestionDto modelToDto(Question question);
}
