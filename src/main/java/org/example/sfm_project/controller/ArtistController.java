package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.ArtistDto;
import org.example.sfm_project.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArtistController {
    @Autowired
    private ArtistService artistService;

    @PostMapping("/save")
    public void save(ArtistDto artistDto){artistService.save(artistDto);}

    @PostMapping("/delete/{artistId}")
    public void delete(@PathVariable Integer artistId){artistService.delete(artistId);}
}
