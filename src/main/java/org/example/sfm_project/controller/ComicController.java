package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.ComicDto;
import org.example.sfm_project.service.ComicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ComicController {
    @Autowired
    private ComicService comicService;

    @PostMapping("/saveComic")
    public void save(ComicDto comicDto){comicService.save(comicDto);}

    @DeleteMapping("/deleteComic/{comicId}")
    public void delete(@PathVariable Integer comicId){comicService.delete(comicId);}
}
