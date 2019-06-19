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
  MatCardModule,
  MatSelectModule,
  MatListModule,
  MatIconModule, MatToolbarModule, MatSidenavModule
} from "@angular/material";
import { ToastrModule } from 'ngx-toastr';
 
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateeventComponent } from "./components/createevent/createevent.component";

import { EventsService } from "./services/events.service";
import { EventDetailsComponent } from "./components/event-details/eventdetails.component";
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [AppComponent, CreateeventComponent, EventDetailsComponent, MainNavComponent, AboutPageComponent, AuthComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
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
