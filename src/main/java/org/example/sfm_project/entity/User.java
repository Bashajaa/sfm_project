package org.example.sfm_project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name="users")
@Data
@NoArgsConstructor
public class User {
    @Id
    private Integer id;
    private String username;
    private String name;
    private String email;
    private Date dateOfBirth;
    private String gender;
    private String country;
    private Date registrationDate;
}

