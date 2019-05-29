import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('https://teamfutbeta-88c44.firebaseio.com/event.json')
    .map(
      (response: Response) => {
        const event = response;
        return event;
      }
    );
  }

  updateEvents(event:any[]) {
    return this.http.put('https://teamfutbeta-88c44.firebaseio.com/event.json', event);
  }

  createEvent(event:any[]) {
    return this.http.post('https://teamfutbeta-88c44.firebaseio.com/event.json', event);
  }
}
