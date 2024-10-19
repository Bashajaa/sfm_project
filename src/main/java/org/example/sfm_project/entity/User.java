package org.example.sfm_project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="users")
@Data
@NoArgsConstructor
public class User {
    @Id
<<<<<<< HEAD
    private Integer id;
    private String name;
    private String email;
    private String phoneNumber;
=======
    private Long id;
    private String name;
    private String email;
>>>>>>> origin/dev
}

