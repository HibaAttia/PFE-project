package com.HRPlus.space.entities;

import java.sql.Date;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteInterne {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id ; 
	
	private String title ; 
	
	private String content ; 
	
	private Instant createdOn ; 
	
	private Instant updatedOn ; 
	
	private String username ; 
	
	public void setUsername(String username) {
        this.username = username;
    }
}
