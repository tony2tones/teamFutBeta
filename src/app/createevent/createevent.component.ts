import { Component} from '@angular/core';

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
  constructor() { }

}
