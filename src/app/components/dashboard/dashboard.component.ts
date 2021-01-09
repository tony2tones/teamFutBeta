import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

import { Game, games, MockValues } from '../../model/mockdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  response:Array<string>;
  games = games;
  constructor(private router: Router, private eventService: EventsService, private mockValues: MockValues) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.mockValues.getMockValues().subscribe(
      (event: any) => {
        event = this.games;
        // this.mockValues.getMockValues();
        let toast = event;
        console.log('consolely eventy ', event);
        console.log('consolely eventy ', JSON.stringify(event));
        // console.log('consolely eventy ', event.id['1']);
        console.log('consolely eventy ', event);
        event.id
        // console.log(this.response);
        // this.setPlayerState(this.events);
        // if(this.events.location && this)
      },
      error => console.log(error)
    );
  }

  gameDetails($event) {
    let id = $event;
    console.log('Check if this is right', id);
    this.router.navigate([`/event-details, ${id}`])
  }

}
