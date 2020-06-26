package com.HRPlus.space.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HRPlus.space.entities.Conge;
import com.HRPlus.space.entities.Employe;
import com.HRPlus.space.repositories.IEmployeRepo;

@Service
public class EmployeServiceImpl  {

	@Autowired
	private IEmployeRepo employeRepo;

	
	public List<Employe> getAllEmployees() {
		return employeRepo.findAll();
	}

	
	public boolean saveEmploye(Employe employe) {

		if (employeRepo.save(employe) != null)
			return true;
		else
			return false;
	}

	
	public void deleteEmploye(Employe employe) {
		if (employe != null)
			employeRepo.delete(employe);

	}

	
	public Employe updateEmploye(Employe employe) {
		return employeRepo.save(employe);
	}

	
	public Long countEmploye() {

		return employeRepo.count();

	}

	
	public Optional<Employe> findById(Long id) {

		return employeRepo.findById(id);

	}
	
	public List<Conge> getCongeByemployeId (Long id){
		
		Employe employe = new Employe();
		if (employe.getConges() != null)
			return employe.getConges();
		else 
			return null ;
		
	}

}
