package org.example.sfm_project.service;

import org.example.sfm_project.dtos.UserDto;
import org.example.sfm_project.entity.User;
import org.example.sfm_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public void save(UserDto userDto){
        User user = new User();
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        userRepository.save(user);
    }
}
