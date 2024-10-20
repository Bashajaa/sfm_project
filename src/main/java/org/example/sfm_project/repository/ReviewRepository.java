package org.example.sfm_project.repository;

import org.example.sfm_project.entity.History;
import org.example.sfm_project.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review,Integer> {
}
