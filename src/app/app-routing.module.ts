import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateeventComponent } from './components/createevent/createevent.component';
import { EventlistComponent } from './eventlist/eventlist.component';

const routes: Routes = [
  {path: '', component: EventlistComponent},
  {path:'createevent',component: CreateeventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
