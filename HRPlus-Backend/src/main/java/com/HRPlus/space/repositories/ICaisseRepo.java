package com.HRPlus.space.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HRPlus.space.entities.Caisse;

@Repository
public interface ICaisseRepo extends JpaRepository<Caisse, Long> {

}
