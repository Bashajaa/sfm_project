package org.example.sfm_project.repository;

import org.example.sfm_project.entity.Comic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComicRepository extends JpaRepository<Comic,Integer> {
}
