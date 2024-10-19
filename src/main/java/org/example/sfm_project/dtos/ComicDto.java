package org.example.sfm_project.dtos;

import lombok.Getter;
import lombok.Setter;
import org.example.sfm_project.entity.ComicCategory;

@Getter
@Setter
public class ComicDto {
    private String title;
    private String description;
    private ComicCategory category;
    private String picture;
    private String writer;
    private Integer price;
}
