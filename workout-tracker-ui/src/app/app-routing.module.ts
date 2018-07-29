import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TrackerDashboardComponent } from './components/tracker-dashboard/tracker-dashboard.component';
import { CreateTrackerComponent } from './components/create-tracker/create-tracker.component';



const routes: Routes = [
  { path: '', component: TrackerDashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: TrackerDashboardComponent },
  { path: 'workout/create', component: CreateTrackerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
