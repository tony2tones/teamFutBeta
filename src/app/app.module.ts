import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//Adding material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatSelectModule,
  MatListModule,
  MatIconModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateeventComponent } from "./components/createevent/createevent.component";

import { EventsService } from "./services/events.service";
import { EventlistComponent } from "./eventlist/eventlist.component";

@NgModule({
  declarations: [AppComponent, CreateeventComponent, EventlistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
