import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GameService } from "src/app/services/games.service";

import { Game, games, MockValues } from "../../model/mockdata";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  response: Array<string>;
  @Output() open: EventEmitter<any> = new EventEmitter();
  public id;
  // games = games;
  games = [];
  constructor(
    private router: Router,
    private gameService: GameService,
    private route: ActivatedRoute
  ) {}
  game: Game;
  title: string;
  location: string;
  sample: any;
  public isLoading: boolean;

  ngOnInit() {
    this.isLoading = true;
    this.getEvents();
  }

  getEvents() {
    this.gameService.getEvents().subscribe((data: any) => {
      this.games = data;
      console.log("Data check should have both games", this.games);
    });
    this.isLoading = false;

    // this.mockValues.getMockValues().subscribe((event: any) => {
    //     event = this.games;
    //     // this.mockValues.getMockValues();
    //     // let toast = event.filter(value => value.id === '1');
    //     // console.log('consolely eventy filter', toast);
    //     // console.log('consolely eventy ', event.id['1']);
    //     console.log('consolely eventy ', event);
    //     this.sample = this.games.map((e) => {
    //       return {
    //           id : e.id,
    //           location: e.location,
    //           title : e.title,
    //           time : e.time,
    //           players: e.players,
    //           date: e.date

    //         }
    //     })

    //     console.log('the samoke ', this.sample);
    // this.setPlayerState(this.events);
    // if(this.events.location && this)
    //   },
    //   error => console.log(error)
    // );
  }


}
