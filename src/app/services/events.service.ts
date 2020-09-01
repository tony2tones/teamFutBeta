import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from './auth.service';
import { exhaustMap, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private authService:AuthService) { }

  getEvents() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get('https://teamfutbeta-88c44.firebaseio.com/event.json'
        );
      }),
      map(
        (response: Response) => {
          const event = response;
          return event;
        }
      ));
    }

  updateEvents(event:any[]) {
    return this.http.put('https://teamfutbeta-88c44.firebaseio.com/event.json', event);
  }

  createEvent(event:Event[]) {
    console.log('this is the event that is passed', event);
    return this.http.post('https://teamfutbeta-88c44.firebaseio.com/event.json', event);
  }
}
