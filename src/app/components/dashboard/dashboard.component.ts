import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private eventService: EventsService) { }

  ngOnInit() {
  }

  getEvents() {
    this.eventService.getEvents().subscribe(
      (event: any) => {
        console.log(event);
        // this.setPlayerState(this.events);
        // if(this.events.location && this)
      },
      error => console.log(error)
    );
  }

}
