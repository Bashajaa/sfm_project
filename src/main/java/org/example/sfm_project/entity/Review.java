package org.example.sfm_project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Review {
    @Id
    private Integer id;
    private Integer rating;
    private String comment;
    private Date created_at;
}
