import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EventsService } from '../../services/events.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';
import { Event, Players } from '../../model/event.model';
import { Player } from 'src/app/model/event.model';
import { Game, games, MockValues } from 'src/app/model/mockdata';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventDetailsComponent implements OnInit {
  constructor(
    private eventService: EventsService,
    private toastr: ToastMessageService,
    private route: ActivatedRoute,
    private mockService: MockValues
  ) {}
  events: Event[];
  players: Players[];
  join: boolean = false;
  player: Player;
  name:string;
  game = games;
  sample:any;

  playa = { name: 'Farrel', state: 'confirmed' };

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      
      console.log('ola here is that name ',params);
    });
    this.getEvents();
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
      console.log('should be in this list?', this.events);
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

  getEvents() {
    console.log('IS THIS EVENT CALLED!!');

    const id = +this.route.snapshot.paramMap.get('id');
  this.mockService.getMockEvent(id)
    .subscribe(hero => this.game = hero);

    // this.mockService.getMockEvent().subscribe(
    //   (event: any) => {
    //     event = this.game;
    //     // this.mockValues.getMockValues();
    //     let toast = event.filter(value => value.id === '1');
    //     console.log('consolely eventy filter', toast);
    //     console.log('consolely json', JSON.stringify(toast));
    //     // console.log('consolely eventy ', event.id['1']);
    //     console.log('consolely eventy ', event);
    //     this.game = () => {
    //       return {
    //           id : toast.id,
    //           location: toast.location,
    //           title : toast.title,
    //           time : toast.time,
    //           players: toast.players,
    //           date: toast.date
    //         }
    //     }
    //   }),
      console.log(this.game)
    }

  addEvent() {
    this.eventService.updateEvents(this.events).subscribe(
      repsonse => {
        this.toastr.showSuccess(
          'Has been successfully joined in.',
          'Footy game'
        );
      },
      error => {
        console.log(error);
        this.toastr.showFail(
          'Something went wrong, please select the reset option to try again.',
          'Error'
        );
      }
    );
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
