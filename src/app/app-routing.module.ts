import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateeventComponent } from './components/createevent/createevent.component';
import { EventDetailsComponent } from './components/event-details/eventdetails.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {path: '', component: EventDetailsComponent},
  {path:'createevent',component: CreateeventComponent},
  {path:'about',component: AboutPageComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
