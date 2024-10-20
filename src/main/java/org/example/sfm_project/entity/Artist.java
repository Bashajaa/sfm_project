package org.example.sfm_project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Artist {
    @Id
    private Integer id;
    private String name;
}
