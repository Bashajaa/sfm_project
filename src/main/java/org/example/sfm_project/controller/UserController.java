package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.UserDto;
import org.example.sfm_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/saveUser")
    public void save(UserDto userDto){
        userService.save(userDto);
    }

    @DeleteMapping("/deleteUser/{userId}")
    public void delete(@PathVariable Integer userId){
        userService.delete(userId);
    }
}
