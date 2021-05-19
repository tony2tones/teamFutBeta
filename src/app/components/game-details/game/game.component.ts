import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game.model';
import { GameService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService) { }
  game: Game;
  ngOnInit() {
    // this.game = this.gameService()
  }

}
