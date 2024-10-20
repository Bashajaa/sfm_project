package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.ReviewDto;
import org.example.sfm_project.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/save")
    public void save(ReviewDto reviewDto){reviewService.save(reviewDto);}
}
