import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateeventComponent } from './createevent/createevent.component';

import { EventsService } from './createevent/events.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateeventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
