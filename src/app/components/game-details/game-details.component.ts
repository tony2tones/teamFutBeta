import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { GameService } from '../../services/games.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';
import {  Players } from '../../model/game.model';
import { Player } from 'src/app/model/game.model';
import { Game, games, MockValues } from 'src/app/model/mockdata';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  constructor(
    private gameService: GameService,
    private toastr: ToastMessageService,
    private route: ActivatedRoute,
    private activeRoute: ActivatedRoute
  ) {}
  @Input() gameId:any;
  public event: Game[];
  public players: Players[];
  public join: boolean = false;
  public player: Player;
  public name:string;
  public game:any;
  public sample:any;

  public spotsRemaining:number;

  playa = { name: 'Farrel', state: 'confirmed' };

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap)  => {
      this.gameId = params.get('id');
      console.log("side menu id parameter ",this.gameId);
    }
    );
    // this.route.queryParams.subscribe(params => {
      
    //   console.log('ola here is that name ',params);
    // });
    this.loadGame();
  }

  addPlayer() {
    this.join = !this.join;
    if (this.join) {
      this.player = this.playa;
      // let toasty = this.player;
      // this.players.push(this.newPlayer);
      // this.events.push(this.players);
      // console.log('should be in this list?',this.events); 
    // this.players.push(...newArray, toasty);
      console.log('should be in this list?', this.event);
      this.addEvent();
    }
  }

  deleteConfirmed(name: string) {
    let i = 0;
    let length = this.players.length;
    for (i; i < length; i++) {
      if (this.players[i]['name'] == name) {
        this.players.splice(i, 1);
      }
    }
    this.addEvent();
  }

  loadGame(){
    console.log('IS THIS EVENT CALLED!!');
    let results = {};
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id baby ', this.gameId);
    this.gameService.getGameById(this.gameId).subscribe(data => {
      this.game = data.payload.data();
      console.log('test', this.game);
      this.spotsRemaining = this.game.players.length - 10;
      });
      console.log('test  ', this.spotsRemaining);
    // });

    // this.students = data.map(e => {
    //   return {
    //     id: e.payload.doc.id,
    //     isEdit: false,
    //     Name: e.payload.doc.data()['Name'],
    //     Age: e.payload.doc.data()['Age'],
    //     Address: e.payload.doc.data()['Address'],
    //   };
    // })
    // console.log(this.students);

  // this.mockService.getMockEvent(id)
  //   .subscribe(hero => this.game = hero);
  //   this.sample = id;

    // this.mockService.getMockEvent(id).subscribe(
      // (event: any) => {
        // event = this.game;
        // this.mockValues.getMockValues();
        // this.event = event.filter((value:Event) => value.id === String(id));
        // console.log('consolely eventy filter', toast);
            
        // })
    }

  addEvent() {
    // this.gameService.updateEvents(this.event).subscribe(
    //   repsonse => {
    //     this.toastr.showSuccess(
    //       'Has been successfully joined in.',
    //       'Footy game'
    //     );
    //   },
    //   error => {
    //     console.log(error);
    //     this.toastr.showFail(
    //       'Something went wrong, please select the reset option to try again.',
    //       'Error'
    //     );
    //   }
    // );
  }

  setPlayerState(data: any[]) {
    let playerState = [];
    var arrayLength = data.length;
    for (var i = 1; i < arrayLength; i++) {
      playerState.push(data[i]);
      this.players = playerState;
    }
  }

  addConfirmed(data: Player) {
    data = { name: 'Farrel', state: 'confirmed' };
    let player = this.player;
    let newArray = [];
    // this.players.push(...newArray, data);
  }
}
