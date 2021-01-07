import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateeventComponent } from './components/createevent/createevent.component';
import { EventDetailsComponent } from './components/event-details/eventdetails.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGaurd } from './components/auth/auth.gaurd';

const routes: Routes = [
  {path: 'event-details', component: EventDetailsComponent},
  {path:'createevent',component: CreateeventComponent,
  canActivate: [AuthGaurd]},
  {path:'about',component: AboutPageComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
