package org.example.sfm_project.dtos;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class OrdersDto {
    private Date date;
    private Integer totalPrice;
    private String status;

}
