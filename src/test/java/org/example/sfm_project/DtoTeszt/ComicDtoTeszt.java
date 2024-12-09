package org.example.sfm_project.DtoTeszt;

import org.example.sfm_project.dtos.ComicDto;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ComicDtoTeszt {

    @Test
    void testGettersAndSetters() {
        ComicDto comicDto = new ComicDto();

        // Set values
        comicDto.setTitle("Superhero Adventures");
        comicDto.setDescription("A thrilling tale of heroes and villains.");
        comicDto.setPicture("superhero.jpg");
        comicDto.setPrice(15);
        comicDto.setReleaseYear(2023);

        // Assert values
        assertEquals("Superhero Adventures", comicDto.getTitle());
        assertEquals("A thrilling tale of heroes and villains.", comicDto.getDescription());
        assertEquals("superhero.jpg", comicDto.getPicture());
        assertEquals(15, comicDto.getPrice());
        assertEquals(2023, comicDto.getReleaseYear());
    }
}
