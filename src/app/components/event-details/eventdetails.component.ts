import { Component, OnInit } from "@angular/core";
import { EventsService } from "../../services/events.service";
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: "app-eventdetails",
  templateUrl: "./eventdetails.component.html",
  styleUrls: ["./eventdetails.component.css"]
})
export class EventDetailsComponent implements OnInit {
  constructor(private eventService: EventsService, private toastr : ToastMessageService) {}
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
      // this.addEventDetails();
      this.addEvent();
      console.log('should be in this list?',this.events);  
    } else {
      console.log('this should remove');
    }
  }

  addEventDetails() {
    let group = [];
    this.events = group.concat(this.events, this.players);
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

  addEvent() {
    this.eventService.updateEvents(this.events).subscribe(
      repsonse => {
          this.toastr.showSuccess(
            "Has been successfully joined in.",
            "Footy game"
          );
      },
      error => {
        console.log(error);
        this.toastr.showFail(
          "Something went wrong, please select the reset option to try again.",
          "Error"
        );
      }
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
