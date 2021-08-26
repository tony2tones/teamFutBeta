import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { GameService } from "../../services/games.service";
import { ToastMessageService } from "src/app/services/toast-message.service";
import { Players } from "../../model/game.model";
import { Player } from "src/app/model/game.model";
import { Game, games, MockValues } from "src/app/model/mockdata";

@Component({
  selector: "app-game-details",
  templateUrl: "./game-details.component.html",
  styleUrls: ["./game-details.component.css"],
})
export class GameDetailsComponent implements OnInit {
  constructor(
    private gameService: GameService,
    private toastr: ToastMessageService,
    private route: ActivatedRoute,
    private activeRoute: ActivatedRoute
  ) {}
  public playerName: string;
  @Input() gameId: any;
  public event: Game[];
  public players: Players[];
  public join: boolean = false;
  public player: Player;
  public name: string;
  public game: any;

  public spotsRemaining: number;
  public remaining: string;

  public addPlayerToggle: boolean = false;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.gameId = params.get("id");
      console.log("side menu id parameter ", this.gameId);
    });
    this.loadGame();
  }

  loadGame() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.gameService.getGameById(this.gameId).subscribe((data) => {
      this.game = data.payload.data();
      this.playerCountCheck();
    });  
  }
 
  playerCountCheck() {
    this.spotsRemaining = 10 - this.game.players.length;
    this.remaining = this.spotsRemaining === 0 ? "No slots available" : `${this.spotsRemaining} slots available`;
    this.addPlayerToggle = this.spotsRemaining === 0 ? false : true;
  }

  addConfirmed(data: Player) {
    data = { name: "Shadien", state: "Confirmed" };
    let newArray = [];
    newArray.push(data, ...this.game.players );
    this.game.players = newArray;
    this.playerCountCheck();
  }
}
