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
        user.setUsername(userDto.getUsername());
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setDateOfBirth(userDto.getDateOfBirth());
        user.setGender(userDto.getGender());
        user.setCountry(userDto.getCountry());
        user.setRegistrationDate(userDto.getRegistrationDate());
        userRepository.save(user);
    }

    public void delete(Integer userId){
        if(userRepository.existsById(userId)){
            userRepository.deleteById(userId);
        }
        else {
            throw new RuntimeException("User not found with id: " + userId);
        }
    }

//    public void delete(Integer userId){
//        if(userRepository.existsById(userId)){
//            User user= userRepository.findById(userId);
//            userRepository.delete(user);
//        }
//        else {
//            throw new RuntimeException("User not found with id: " + userId);
//        }
//    }
}
