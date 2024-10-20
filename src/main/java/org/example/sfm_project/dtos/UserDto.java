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
    private Date dateOfBirth;
    private String gender;
    private String country;
    private Date registrationDate;
}
