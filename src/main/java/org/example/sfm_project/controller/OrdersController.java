package org.example.sfm_project.controller;

import org.example.sfm_project.dtos.OrdersDto;
import org.example.sfm_project.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrdersController {
    @Autowired
    private HistoryService historyService;

    @PostMapping("/save")
    public void save(OrdersDto ordersDto){historyService.save(ordersDto);}
}
