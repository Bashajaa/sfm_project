package org.example.sfm_project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class OrderItems {
    @Id
    private Integer id;
    private Integer quantity;
    private Integer unitPrice;
}
