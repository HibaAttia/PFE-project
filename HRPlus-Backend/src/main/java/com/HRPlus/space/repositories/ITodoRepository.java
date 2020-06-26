package com.HRPlus.space.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import com.HRPlus.space.entities.Todo;

@Repository
@RestController
public interface ITodoRepository extends JpaRepository<Todo, Long> {

}
