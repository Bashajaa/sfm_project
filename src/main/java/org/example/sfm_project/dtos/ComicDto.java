package org.example.sfm_project.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ComicDto {
    private String title;
    private String description;
    private String picture;
    private Integer price;
    private Integer releaseYear;
}
