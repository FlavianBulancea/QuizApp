package org.example.controller;

import org.example.dto.CategoryDto;
import org.example.exception.category.NoCategoryFoundException;
import org.example.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<CategoryDto>> getAll(){

<<<<<<< HEAD
        return new ResponseEntity<>(categoryService.getAll(), new HttpHeaders(), HttpStatus.OK);
=======
        try {
            return new ResponseEntity<>(categoryService.getAll(), new HttpHeaders(), HttpStatus.OK);
        }catch (NoCategoryFoundException e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
>>>>>>> 0da8c9f87bc21eee4a1d59745b3809e16376e1d1
    }
}
