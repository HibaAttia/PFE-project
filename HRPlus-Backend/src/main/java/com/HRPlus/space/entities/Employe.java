package com.HRPlus.space.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Employe extends UserInformation {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String status;
	private String salary;
	private String cnss; 
	private String departement;
	private String fonction;
	private String typeContrat;
	private LocalDate dateEntree;
	private LocalDate dateSortie;
	private String coutHeuresSup;
	private String dureeConges;
	private String id_card_number;
	
	
	private boolean archived;
	

	@OneToMany(mappedBy = "employe")
	private List<EmployeMeeting> employeMeetings;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "employe")
	@JsonManagedReference
	private List<Document> docs ;

	
	
	

}
