package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.ComicDto;
import org.example.sfm_project.service.ComicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ComicController {
    @Autowired
    private ComicService comicService;

    @PostMapping("/save")
    public void save(ComicDto comicDto){comicService.save(comicDto);}
}
