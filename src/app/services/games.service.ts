import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import "rxjs/Rx";
import { AuthService } from "./auth.service";
import { exhaustMap, take, map } from "rxjs/operators";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";

import { Observable, ReplaySubject } from "rxjs/Rx";
import { firestore } from "firebase";
import * as firebase from "firebase";
import { DomElementSchemaRegistry } from "@angular/compiler";
import { Game } from "../model/game.model";

let root;
@Injectable({
  providedIn: "root",
})
export class EventsService {
  constructor(private firestore: AngularFirestore) {}

  // constructor(private http: HttpClient, private realtimeDb: AngularFireDatabase) {}
  // constructor(private http: HttpClient, private authService:AuthService, private fireDB: AngularFireDatabase,
  //   private fireService: AppFirebaseService ) { }
  getEvents(): Observable<any> {
    // this.doThis();
    return this.firestore.collection("events").valueChanges();
    // return this.realtimeDb.list('event').valueChanges();
  }

  doThis(data) {
    // return this.firestore.collection('events'
    // .add())
    // });
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

  updateEvents(event: any[]) {
    console.log("EVENT updated ", event);
    // return this.http.put('https://teamfutbeta-88c44.firebaseio.com/event.json', event);
  }

  createGame(game: any) {
    let gameDetails;
    const id = this.firestore.createId();
    console.log("this is the game that is passed", game, " and id: ", id);
    game.id = id;
    const gameDeets = game;
    gameDeets.id = id;
    console.log("With ID ", gameDeets, " and id: ", id);
    gameDetails = this.convertArrayToObject(gameDeets, 2);
    //   return Object.assign({},obj);
    // })
    console.log("With ID ", gameDetails, " and id: ", id);


    // const gameer = {
    //   title: game.title,
    //   location: game.location,
    //   date: game.date,
    //   time: game.time,
    // };
    return this.firestore.collection("games").add(gameDetails);
    // return this.http.post('https://teamfutbeta-88c44.firebaseio.com/events.json', event);
    // return this.realtimeDb.
  }

  private convertArrayToObject = (array, key): Object => {
    return array.reduce(
      (obj, item) => ({
        ...obj,
        [item[key]]: item,
      }),
      {}
    );
  };
}
