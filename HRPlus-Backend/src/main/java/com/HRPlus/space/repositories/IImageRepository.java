package com.HRPlus.space.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HRPlus.space.entities.Image;

public interface IImageRepository extends JpaRepository<Image, Long> {
	
}
