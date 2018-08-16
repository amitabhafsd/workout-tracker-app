package com.cts.fsd.workout.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.fsd.workout.entity.Workout;


@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long>{
	
}
