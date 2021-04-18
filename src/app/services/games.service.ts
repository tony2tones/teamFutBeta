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
    let gameDetails = game;
    const id = this.firestore.createId();
    console.log("this is the game that is passed", game, " and id: ", id);
    var gameDeets = new Object();
      gameDeets['id']= id;
      gameDeets['date']= gameDetails.date;
      gameDeets['location'] = gameDetails.location;
      gameDeets['players'] = gameDetails.players;
      gameDeets['time'] = gameDetails.time;
      gameDeets['title'] = gameDetails.title;
    
    // gameDetails = this.convertArrayToObject(gameDeets, 'GameDetails');
    //   return Object.assign({},obj);
    // })


    // const gameer = {
    //   title: game.title,
    //   location: game.location,
    //   date: game.date,
    //   time: game.time,
    // };
    return this.firestore.collection("games").add(gameDeets);
  }

  private convertArrayToObject = (array, key): Object => {
    let gameDetails = {};
    return gameDetails = array.reduce(
      (obj, item) => ({
        ...obj,
        [item[key]]: item,
      }),
      {}
    );
  };
}
