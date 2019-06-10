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
  ngOnInit() {
    this.getEvents();
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
