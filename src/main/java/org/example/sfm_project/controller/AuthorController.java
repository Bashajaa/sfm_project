package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.AuthorDto;
import org.example.sfm_project.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorController {
    @Autowired
    private ArtistService artistService;

    @PostMapping("/saveAuthor")
    public void save(AuthorDto authorDto){artistService.save(authorDto);}

    @PostMapping("/deleteAuthor/{authortId}")
    public void delete(@PathVariable Integer artistId){artistService.delete(artistId);}
}
