package org.example.sfm_project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class History {
    @Id
    private Integer id;
    private Date date;
}
