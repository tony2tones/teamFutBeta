import { Component} from '@angular/core';
import { EventsService } from './events.service';
import { Response } from '@angular/http'

@Component({
  selector: 'createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent  {
  events = [
    {
      name: 'This Sunday',
      date: '05-04-2019',
      location: 'Mowbray',
      time: '09:00 for an hour',
      confirmed: [
        {name: 'Tony'},
        {name: 'Doggy'},
        {name: 'Kyle'}
      ],
      maybe: [
        {name: 'Lyle'}
      ]
    }
  ]
  constructor(private eventsService: EventsService) { }

  addEvent(){
    this.eventsService.updateEvents(this.events).subscribe(
      (response: Response) => {
        const events = response.json();
        console.log(events);
      },
      error => console.log(error)
    )
  }

  getEvents() {
    this.eventsService.getEvents()
    .subscribe(
      (response:Response) => {
        const events = response.json();
        console.log(events);
      },
      error => console.log(error)
    )
  }
}
