import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EventsService } from '../../services/events.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';
import { Event, Players } from '../../model/event.model';
import { Player } from 'src/app/model/event.model';
import { MockValues } from 'src/app/model/mockdata';

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
    this.mockService.getMockEvent().subscribe(
      (event: any) => {
        this.events = event;
        console.log('THE NEW EVENTS',this.events);
        this.setPlayerState(this.events);
        // if(this.events.location && this)
      },
      error => console.log(error)
    );
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
