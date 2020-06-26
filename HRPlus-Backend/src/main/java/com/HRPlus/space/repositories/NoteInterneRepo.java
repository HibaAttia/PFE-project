package com.HRPlus.space.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HRPlus.space.entities.NoteInterne;

@Repository
public interface NoteInterneRepo extends JpaRepository<NoteInterne, Long> {

}
