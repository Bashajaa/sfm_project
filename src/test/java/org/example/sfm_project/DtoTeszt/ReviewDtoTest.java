package org.example.sfm_project.DtoTeszt;

import org.example.sfm_project.dtos.ReviewDto;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ReviewDtoTest {

    @Test
    void testGettersAndSetters() {
        ReviewDto reviewDto = new ReviewDto();

        reviewDto.setRating(5);
        reviewDto.setComment("Excellent product!");

        assertEquals(5, reviewDto.getRating());
        assertEquals("Excellent product!", reviewDto.getComment());
    }
}
