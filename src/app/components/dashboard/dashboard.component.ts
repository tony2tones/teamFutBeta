import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/games.service';

import { Game, games, MockValues } from '../../model/mockdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  response:Array<string>;
  games = games;
  constructor(private router: Router, private eventService: EventsService, private mockValues: MockValues, private route: ActivatedRoute) { }
 event: Event;
  title:string;
  location:string;
  sample:any;

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
      this.eventService.getEvents().subscribe((data: any) => {
      console.log('Data check ',data);
    });

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

  gameDetails(event$) {
    let id = event$;
    console.log('Check if this is right', event$);
    this.router.navigate([`/event-details/, ${id}`])
  }

}
