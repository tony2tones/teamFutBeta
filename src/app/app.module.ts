import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
} from "@angular/material";
import { ToastrModule } from "ngx-toastr";

import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateGameComponent } from "./components/create-event/create-game.component";

import { GameService } from "./services/games.service";
import { GameDetailsComponent } from "./components/game-details/game-details.component";
import { MainNavComponent } from "./components/main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { AboutPageComponent } from "./components/about-page/about-page.component";
import { AuthComponent } from "./components/auth/auth.component";
import { LoaderComponent } from "./shared/loader/loader.component";
import { AuthInterceptorService } from "./components/auth/auth-interceptor.service";
import { AlertComponent } from "./shared/alert/alert.component";
import { PlaceHolderDirective } from "./shared/placeHolder/placeHolder.directive";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MockValues } from "./model/mockdata";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { GameComponent } from "./components/game-details/game/game.component";
import { GravatarDirective } from "./gravatar.directive";

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    GameDetailsComponent,
    MainNavComponent,
    AboutPageComponent,
    AuthComponent,
    LoaderComponent,
    AlertComponent,
    PlaceHolderDirective,
    DashboardComponent,
    GameComponent,
    GravatarDirective,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
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
    AngularFirestoreModule,
    AngularFireAuthModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: "toast-top-right",
      easing: "ease-in",
    }),
  ],
  providers: [
    GameService,
    MockValues,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent],
})
export class AppModule {}
