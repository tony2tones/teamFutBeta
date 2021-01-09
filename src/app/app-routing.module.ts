import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventDetailsComponent } from './components/event-details/eventdetails.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGaurd } from './components/auth/auth.gaurd';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '/', component: DashboardComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
  {
    path: 'create-event', component: CreateEventComponent,
    canActivate: [AuthGaurd]
  },
  { path: 'about', component: AboutPageComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
