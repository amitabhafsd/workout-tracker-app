import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { TrackerDashboardComponent } from './components/tracker-dashboard/tracker-dashboard.component';
import { CreateTrackerComponent } from './components/create-tracker/create-tracker.component';

import { WorkoutService } from './shared/services/workout.service';
import { SearchContentPipe } from './shared/pipes/search-content.pipe';

import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    TrackerDashboardComponent,
    SearchContentPipe,
    CreateTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ WorkoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
