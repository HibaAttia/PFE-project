package com.HRPlus.space.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HRPlus.space.entities.Administrateur;

@Repository
public interface IAdminRepo extends JpaRepository<Administrateur, Long> {

}
