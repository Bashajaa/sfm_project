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
<<<<<<< HEAD
    private String description;
    private ComicCategory category;
    private String picture;
    private String writer;

=======
    private ComicCategory category;
>>>>>>> origin/dev
}
