import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from './auth.service';
import { exhaustMap, take, map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor( private firestore: AngularFirestore ) {}

  // constructor(private http: HttpClient, private realtimeDb: AngularFireDatabase) {}
  // constructor(private http: HttpClient, private authService:AuthService, private fireDB: AngularFireDatabase,
  //   private fireService: AppFirebaseService ) { }
getEvents(): Observable<any> {
  return this.firestore.collection('events').valueChanges();
  // return this.realtimeDb.list('event').valueChanges();
}
  // getEvents() {
  //   return this.authService.user.pipe(
  //     // take(1),
  //     exhaustMap(user => {
  //       return this.http.get('https://teamfutbeta-88c44.firebaseio.com/events.json'
  //       );
  //     }),
  //     map(
  //       (response: Response) => {
  //         const event = response;
  //         return event;
  //       }
  //     ));
  //   }

  updateEvents(event:any[]) {
    console.log('EVENT updated ', event);
    // return this.http.put('https://teamfutbeta-88c44.firebaseio.com/event.json', event);
  }

  createEvent(event:any) {
    console.log('this is the event that is passed', event);
    event = {
      title: event.title,
      location: event.location,
      // date: event.date,
      time: event.time
    }
    return this.firestore.collection('events').doc('game-1').set(event);
    // return this.http.post('https://teamfutbeta-88c44.firebaseio.com/events.json', event);
    // return this.realtimeDb.
  }
}
