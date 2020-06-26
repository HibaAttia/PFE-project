package com.HRPlus.space.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.HRPlus.space.entities.Presence;
import com.HRPlus.space.entities.UserInformation;


@Repository
public interface PresenceRepository extends JpaRepository<Presence, Long> {
	
	@Query("select p from Presence p where p.userInfo.idUser = :id")
	public List<Presence> findUserPresenceByUserId(@Param("id") Long id);
	
}
