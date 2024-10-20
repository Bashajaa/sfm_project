package org.example.sfm_project.service;

import org.example.sfm_project.dtos.ReviewDto;
import org.example.sfm_project.entity.Review;
import org.example.sfm_project.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public void save(ReviewDto reviewDto){
        Review review = new Review();
        review.setRating(reviewDto.getRating());
        review.setComment(reviewDto.getComment());
        reviewRepository.save(review);
    }
}
