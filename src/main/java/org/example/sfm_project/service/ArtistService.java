package org.example.sfm_project.service;

import org.example.sfm_project.dtos.AuthorDto;
import org.example.sfm_project.entity.Author;
import org.example.sfm_project.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArtistService {
    @Autowired
    private AuthorRepository authorRepository;

    public void save(AuthorDto authorDto){
        Author author = new Author();
        author.setName(authorDto.getName());
        authorRepository.save(author);
    }

    public void delete(Integer artistId){
        if(authorRepository.existsById(artistId)){
            authorRepository.deleteById(artistId);
        }
        else {
            throw new RuntimeException("Artist not found with id: " + artistId);
        }
    }
}
