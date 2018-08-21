package com.cts.fsd.workout.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.fsd.workout.entity.Category;
import com.cts.fsd.workout.entity.Workout;
import com.cts.fsd.workout.exception.ResourceNotFoundException;
import com.cts.fsd.workout.pojo.WorkoutPOJO;
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
	public Workout getWorkoutById(int workoutId){
		Workout workoutFromDB = null;
		
		try {
			workoutFromDB = workoutRepository.findById(Long.valueOf(workoutId)).get();
			System.out.println("getWorkoutById successfully returned Workout from DB :: " + workoutFromDB.toString());
		}catch (NoSuchElementException e) {
			workoutFromDB = null;
			System.out.println("getWorkoutById NOT successfull...\nNoSuchElementException encountered... ResourceNotFoundException thrown" + e);
			throw new ResourceNotFoundException("Workout" , "workoutId" , workoutId);
		} catch (Exception e ) {
			workoutFromDB = null;
			System.out.println("Exception encountered..." + e);
		}
		
		return workoutFromDB;
	}
	
	public Workout editWorkoutById(int workoutId , WorkoutPOJO newWorkoutPOJO){
		String editResponse = "";
		Workout workoutFromDB = null;
		
		try {
			workoutFromDB =  getWorkoutById(workoutId);
			System.out.println("Updating workoutFromDB = " + workoutFromDB.toString());
//			map pojo elements to entity using mapper
			
		} catch (Exception e) {
			
		}
		
		
		return null;
	}
}
