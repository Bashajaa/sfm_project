package org.example.sfm_project.repository;

import org.example.sfm_project.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
<<<<<<< HEAD
public interface UserRepository extends JpaRepository<User,Integer> {
=======
public class UserRepository extends JpaRepository<User,Long> {
>>>>>>> origin/dev
}
