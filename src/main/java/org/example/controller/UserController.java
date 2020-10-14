package org.example.controller;

import org.example.dto.UserDto;
import org.example.exception.User.NoUserFoundException;
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
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<UserDto>> getAll(){

        try {
            return new ResponseEntity<>(userService.getAll(), new HttpHeaders(), HttpStatus.OK);
        } catch (NoUserFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
