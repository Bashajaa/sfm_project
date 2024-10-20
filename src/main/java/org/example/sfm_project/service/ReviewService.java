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

    public void delete(Integer reviewId){
        if(reviewRepository.existsById(reviewId)){
            reviewRepository.deleteById(reviewId);
        }
        else{
            throw new RuntimeException("Review not found with id: " + reviewId);
        }
    }
}
