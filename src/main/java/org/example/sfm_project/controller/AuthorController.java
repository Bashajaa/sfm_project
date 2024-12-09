package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.AuthorDto;
import org.example.sfm_project.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorController {
    @Autowired
    private AuthorService authorService;

    @PostMapping("/saveAuthor")
    public void save(AuthorDto authorDto){
        authorService.save(authorDto);}

    @DeleteMapping("/deleteAuthor/{authortId}")
    public void delete(@PathVariable Integer artistId){
        authorService.delete(artistId);}
}
