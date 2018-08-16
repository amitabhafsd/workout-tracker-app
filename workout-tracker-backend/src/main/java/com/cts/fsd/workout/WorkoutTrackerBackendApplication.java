package com.cts.fsd.workout;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;



@ComponentScan("com.cts.fsd.workout")
@SpringBootApplication
public class WorkoutTrackerBackendApplication {
	public static void main(String[] args) {
		 SpringApplication.run(WorkoutTrackerBackendApplication.class, args);
	}
}
