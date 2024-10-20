package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.UserDto;
import org.example.sfm_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public void save(UserDto userDto){
        userService.save(userDto);
    }

    @PostMapping("/delete/{userId}")
    public void delete(Integer userId){
        userService.delete(userId);
    }
}
