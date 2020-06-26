package com.HRPlus.space.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HRPlus.space.entities.Archive;

@Repository
public interface IArchiveRepo extends JpaRepository<Archive, Long>{

}
