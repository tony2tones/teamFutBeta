import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateeventComponent } from './components/createevent/createevent.component';
import { EventlistComponent } from './components/eventlist/eventlist.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  {path: '', component: EventlistComponent},
  {path:'createevent',component: CreateeventComponent},
  {path:'about',component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
