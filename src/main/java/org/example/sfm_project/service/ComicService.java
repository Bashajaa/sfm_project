package org.example.sfm_project.service;

import org.example.sfm_project.dtos.ComicDto;
import org.example.sfm_project.entity.Comic;
import org.example.sfm_project.repository.ComicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComicService {
    @Autowired
    private ComicRepository comicRepository;

    public void save(ComicDto comicDto){
        Comic comic = new Comic();
        comic.setTitle(comicDto.getTitle());
        comic.setDescription(comicDto.getDescription());
        comic.setPicture(comicDto.getPicture());
        comic.setPrice(comicDto.getPrice());
        comic.setReleaseYear(comicDto.getReleaseYear());
        comicRepository.save(comic);
    }
}
