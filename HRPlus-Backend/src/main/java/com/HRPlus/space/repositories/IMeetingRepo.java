package com.HRPlus.space.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HRPlus.space.entities.Meeting;

@Repository
public interface IMeetingRepo extends JpaRepository<Meeting, Long> {

}
