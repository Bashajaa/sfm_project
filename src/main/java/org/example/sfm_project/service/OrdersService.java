package org.example.sfm_project.service;

import org.example.sfm_project.dtos.OrdersDto;
import org.example.sfm_project.entity.Orders;
import org.example.sfm_project.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersService {
    @Autowired
    private OrdersRepository historyRepository;

    public void save(OrdersDto ordersDto){
        Orders orders = new Orders();
        orders.setDate(ordersDto.getDate());
        historyRepository.save(orders);
    }
}
