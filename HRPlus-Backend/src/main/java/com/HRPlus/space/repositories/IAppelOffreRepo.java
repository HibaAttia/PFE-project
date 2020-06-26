package com.HRPlus.space.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HRPlus.space.entities.AppelOffre;

@Repository
public interface IAppelOffreRepo extends JpaRepository<AppelOffre, Long> {

}
