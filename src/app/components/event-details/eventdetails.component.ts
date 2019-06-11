import { Component, OnInit } from "@angular/core";
import { EventsService } from "../../services/events.service";

@Component({
  selector: "app-eventdetails",
  templateUrl: "./eventdetails.component.html",
  styleUrls: ["./eventdetails.component.css"]
})
export class EventDetailsComponent implements OnInit {
  constructor(private eventService: EventsService) {}
  events: any[];
  players: any[];
  join: boolean = false;
  newPlayer = { name: "Farrel", status: "confirmed" };

  ngOnInit() {
    this.getEvents();
  }

  addPlayer() {
    this.join = !this.join;
    console.log("Add player button selected", this.join);
    if(this.join){
      this.players.push(this.newPlayer);
      
    } else {
      console.log('this should remove');
    }
        
    console.log('should be in this list?',this.players)
  }

  getEvents() {
    this.eventService.getEvents().subscribe(
      (event: any) => {
        this.events = event;
        this.setPlayerState(this.events);
      },
      error => console.log(error)
    );
  }

  setPlayerState(data: any[]) {
    let playerState = [];
    var arrayLength = data.length;
    for (var i = 1; i < arrayLength; i++) {
      playerState.push(data[i]);
      this.players = playerState;
    }
  }
}
