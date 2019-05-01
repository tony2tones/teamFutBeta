import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: Http) { }

  getEvents() {
    return this.http.get('https://teamfutbeta.firebaseio.com/')
  }

  updateEvents(event:any[]) {
    return this.http.put('https://teamfutbeta.firebaseio.com/', event)
  }
}
