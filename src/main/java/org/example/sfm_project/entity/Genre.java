package org.example.sfm_project.entity;

import jdk.jfr.events.CertificateId;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Genre {
    @Id
    private Integer id;
    private String name;
}