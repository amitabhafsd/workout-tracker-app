import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WorkoutService {
  constructor(private http: Http) { }
  getAllWorkouts() {
    // return this.http.get('https://api.myjson.com/bins/7jjei');
    return this.http.get('http://localhost:8080/workout-tracker/all');
  }
}
