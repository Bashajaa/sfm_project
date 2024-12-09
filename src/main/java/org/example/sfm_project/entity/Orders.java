package org.example.sfm_project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Orders {
    @Id
    private Integer id;
    private Date orderDate;
    private Integer totalPrice;
    private String status;
}
