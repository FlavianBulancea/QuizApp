package org.example.service;

import org.example.dto.CategoryDto;
import org.example.exception.category.NoCategoryFoundException;
import org.example.mapper.CategoryMapper;
import org.example.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    CategoryMapper categoryMapper;

    public List<CategoryDto> getAll() {

        List<CategoryDto> categoryDtoList = categoryRepository.findAll().stream()
                .map(category -> categoryMapper.modelToDto(category))
                .collect(Collectors.toList());

        return categoryDtoList;
    }
}
