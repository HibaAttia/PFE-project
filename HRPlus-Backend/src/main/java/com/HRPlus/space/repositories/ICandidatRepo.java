package com.HRPlus.space.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HRPlus.space.entities.Candidat;

@Repository
public interface ICandidatRepo extends JpaRepository<Candidat, Long> {

}
