package org.example.sfm_project.service;

import org.example.sfm_project.dtos.ArtistDto;
import org.example.sfm_project.entity.Artist;
import org.example.sfm_project.repository.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArtistService {
    @Autowired
    private ArtistRepository artistRepository;

    public void save(ArtistDto artistDto){
        Artist artist = new Artist();
        artist.setName(artistDto.getName());
        artistRepository.save(artist);
    }
}
