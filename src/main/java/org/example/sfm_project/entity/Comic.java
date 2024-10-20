package org.example.sfm_project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Comic {
    @Id
    private Integer id;
    private String title;
    private String description;
    private String picture;
    private Integer price;
    private Integer releaseYear;
}
