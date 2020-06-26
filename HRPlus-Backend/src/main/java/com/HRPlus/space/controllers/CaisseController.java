package com.HRPlus.space.controllers;

import java.util.List;
import java.util.Optional;

import org.omg.CORBA.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.HRPlus.space.entities.Caisse;
import com.HRPlus.space.entities.Conge;
import com.HRPlus.space.entities.Employe;
import com.HRPlus.space.entities.NoteInterne;
import com.HRPlus.space.entities.UserInformation;
import com.HRPlus.space.repositories.ICaisseRepo;
import com.HRPlus.space.repositories.IUtilidateurRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CaisseController {

	@Autowired
	private ICaisseRepo caisseRepo;

	@Autowired
	private IUtilidateurRepo userRepo;

	@GetMapping("/caisses")
	public List<Caisse> getAllCaisses() {
		return caisseRepo.findAll();
	}

	@PostMapping("/createCaisse")
	public Caisse createCaisse(@RequestBody Caisse caisse, @RequestParam Long id) {
		
		UserInformation user1 = userRepo.findById(id).get();
		caisse.setUser(user1);
		
		if (user1 != null) {
		user1.setBudget(user1.getBudget() + caisse.getMontant());
		userRepo.save(user1);
		}
		return caisseRepo.save(caisse);
		
		
	}
	
	
	@DeleteMapping("/deleteCaisse/{id}")
	public ResponseEntity<Caisse> deleteExpense(@PathVariable("id") Long id) {
		Optional<Caisse> caisse = caisseRepo.findById(id);
		UserInformation user = caisse.get().getUser();
		if (user != null) {
			user.setBudget(user.getBudget() - caisse.get().getMontant());
			userRepo.save(user);
			}
		if (caisse.isPresent()) {
			caisseRepo.delete(caisse.get());
			return new ResponseEntity<Caisse>(caisse.get(), HttpStatus.ACCEPTED);
		} else
			return new ResponseEntity<Caisse>(HttpStatus.NOT_ACCEPTABLE);
	}

}
