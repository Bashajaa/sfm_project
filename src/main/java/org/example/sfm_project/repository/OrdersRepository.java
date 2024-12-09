package org.example.sfm_project.repository;

import org.example.sfm_project.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersRepository extends JpaRepository<Orders,Integer> {
}
