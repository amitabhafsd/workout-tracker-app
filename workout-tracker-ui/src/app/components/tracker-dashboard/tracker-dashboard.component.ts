import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WorkoutService } from '../../shared/services/workout.service';

@Component({
  selector: 'app-tracker-dashboard',
  templateUrl: './tracker-dashboard.component.html',
  styleUrls: ['./tracker-dashboard.component.css']
})
export class TrackerDashboardComponent implements OnInit {
  workoutResponse: any[];
  searchText: string = '';
  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService.getAllWorkouts()
    .subscribe(temp => {
      this.workoutResponse = JSON.parse(temp['_body']).workoutResponse;
    });
  }

  searchWorkout(event) {
    this.searchText = event.target.value;
  }
}
