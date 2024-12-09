package org.example.sfm_project.DtoTeszt;

import org.example.sfm_project.dtos.ArtistDto;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ArtistDtoTeszt {
    @Test
    void testArtistDtoGettersAndSetters() {
        ArtistDto artistDto = new ArtistDto();

        artistDto.setName("Test Artist");

        assertEquals("Test Artist", artistDto.getName());
    }
}
