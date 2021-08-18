import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateGameComponent } from "./components/create-event/create-game.component";
import { GameDetailsComponent } from "./components/game-details/game-details.component";
import { AboutPageComponent } from "./components/about-page/about-page.component";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthGaurd } from "./components/auth/auth.gaurd";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { GameComponent } from "./components/game-details/game/game.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGaurd],
  },
  { path: "game-details/:id", component: GameDetailsComponent },
  {
    path: "create-game",
    component: CreateGameComponent,
    canActivate: [AuthGaurd],
  },
  { path: "about", component: AboutPageComponent },
  { path: "auth", component: AuthComponent },
  { path: "**", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
