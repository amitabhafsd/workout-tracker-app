package com.cts.fsd.workout.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.fsd.workout.entity.Workout;
import com.cts.fsd.workout.repo.WorkoutRepository;

@Service
public class WorkoutService {
	
	@Autowired
	WorkoutRepository workoutRepository;
	
	
	public List<Workout> createWorkout(List<Workout> workoutsEntityList) {
		System.out.println("workoutsEntityList = " + workoutsEntityList);
		return workoutRepository.saveAll(workoutsEntityList);
		
	}
	
	public List<Workout> getAllWorkouts() {
		
		return workoutRepository.findAll();
		
	}
	
}
