package org.example.sfm_project.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ComicDto {
    private String title;

    private Integer price;
    private String description;
    private String image_url;
    private Integer release_date;
}
