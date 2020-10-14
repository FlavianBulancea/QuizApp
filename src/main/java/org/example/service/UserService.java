package org.example.service;

import org.example.dto.UserDto;
import org.example.exception.User.NoUserFoundException;
import org.example.mapper.UserMapper;
import org.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserMapper userMapper;

    public List<UserDto> getAll() throws NoUserFoundException {
        List<UserDto> userDtoList = userRepository.findAll().stream()
                .map(user -> userMapper.modelToDto(user))
                .collect(Collectors.toList());

        if (userDtoList.size() == 0)
            throw new NoUserFoundException();


        return userDtoList;
    }
}
