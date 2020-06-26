package com.HRPlus.space.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Presence {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private LocalDate day;
	private int nbrheures;

	@ManyToOne
	private UserInformation userInfo ;
}
