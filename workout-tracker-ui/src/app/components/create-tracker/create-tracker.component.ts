import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tracker',
  templateUrl: './create-tracker.component.html',
  styleUrls: ['./create-tracker.component.css']
})
export class CreateTrackerComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;
  caloriesBurnt: string = '0.0';

  constructor() { }

  ngOnInit() {
    // GET call for CATEGORIES to be done here
    this.myForm = new FormGroup({
      title: new FormControl('', [ Validators.required, Validators.maxLength(20),  Validators.minLength(2) ]),
      note: new FormControl('', [ Validators.required, Validators.maxLength(200)]),
      caloriesburnt: new FormControl(0.0),
      category: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm );
    // POST call for WORKOUT add to be done here
  }

  increaseCalories() {
    this.caloriesBurnt =  (parseFloat(this.caloriesBurnt.toString()) + 0.1).toFixed(1);
  }

  decreaseCalories() {
    this.caloriesBurnt =  (parseFloat(this.caloriesBurnt.toString()) - 0.1).toFixed(1);
  }
}
