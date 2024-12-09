package org.example.sfm_project.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ReviewDto {
    private Integer rating;
    private String comment;
    private Date created_at;
}
