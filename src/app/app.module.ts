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
  MatIconModule, MatToolbarModule, MatSidenavModule
} from "@angular/material";
import { ToastrModule } from 'ngx-toastr';
 

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateeventComponent } from "./components/createevent/createevent.component";

import { EventsService } from "./services/events.service";
import { EventlistComponent } from "./components/eventlist/eventlist.component";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  declarations: [AppComponent, CreateeventComponent, EventlistComponent, MainNavComponent, AboutPageComponent],
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
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      easing: 'ease-in'
    })
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
