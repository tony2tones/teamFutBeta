import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  constructor(private eventService : EventsService) { }
  events:any[];
  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService
      .getEvents()
      .subscribe(
        (event:any) => {
          this.events = event;
          console.log('getting events if there is any ', event);
        },
        error => console.log(error)
      );
  }

}
