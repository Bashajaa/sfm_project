package org.example.sfm_project.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserDto {
    private String username;
    private String name;
    private String email;
    private String password;
    private Date registrationDate;
    private String gender;
    private String country;
    private Date dateOfBirth;
}
