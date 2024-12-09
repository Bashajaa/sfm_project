package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.OrdersDto;
import org.example.sfm_project.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrdersController {
    @Autowired
    private OrdersService ordersService;

    @DeleteMapping("/saveOrders")
    public void save(OrdersDto ordersDto){ordersService.save(ordersDto);}
}
