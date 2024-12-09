package org.example.sfm_project.EntityTeszt;

import org.example.sfm_project.entity.Artist;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ArtistTest {

    @Test
    void testGettersAndSetters() {
        Artist artist = new Artist();

        artist.setId(1);
        artist.setName("John Doe");

        assertEquals(1, artist.getId());
        assertEquals("John Doe", artist.getName());
    }
}
