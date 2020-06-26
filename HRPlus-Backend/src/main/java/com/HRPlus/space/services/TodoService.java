package com.HRPlus.space.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HRPlus.space.entities.Todo;
import com.HRPlus.space.repositories.ITodoRepository;

@Service
public class TodoService {
	
	@Autowired
	private ITodoRepository todoRepo ;
	
	public void checkUncheck(Long id ) {
		
		Optional<Todo> todo = todoRepo.findById(id);
		if (todo.get().isCompleted() == true )
			todo.get().setCompleted(false);
		
		else
			todo.get().setCompleted(true);
		
		todoRepo.save(todo.get());
		
		
	}
}
