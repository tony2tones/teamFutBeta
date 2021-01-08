import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

import { Game, game, MockValues } from '../../model/mockdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  response:Array<string>;
  test:Game = game;
  constructor(private eventService: EventsService, private mockValues: MockValues) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.mockValues.getMockValues().subscribe(
      (event: any) => {
        event = this.test;
        // this.mockValues.getMockValues();
        console.log('consolely eventy ', event);
        // console.log(this.response);
        // this.setPlayerState(this.events);
        // if(this.events.location && this)
      },
      error => console.log(error)
    );
  }

}
