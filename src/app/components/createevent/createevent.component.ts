import { Component, ViewChild, OnInit } from "@angular/core";
import { EventsService } from "../../services/events.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastMessageService } from "../../services/toast-message.service";

import { MatStepper } from "@angular/material";
import { Event } from "../../model/event.model";

export interface User {
  name: string;
}
@Component({
  selector: "createevent",
  templateUrl: "./createevent.component.html",
  styleUrls: ["./createevent.component.css"]
})
export class CreateeventComponent implements OnInit {
  eventForm: FormGroup;
  detailsForm: FormGroup;

  event: Event;
  isLinear = true;
  @ViewChild("step1") stepper: MatStepper;

  attendingState: Array<string> = ["Confirmed", "Maybe"];
  eventDetails: Event[];
  details: any[];
  players: any[];
  player: string;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    private router: Router,
    private toastr: ToastMessageService
  ) {}

  ngOnInit() {
    this.detailsForm = this.fb.group({
      title: ["Sunday Game", Validators.compose([Validators.required])],
      location: ["Mowbray", Validators.compose([Validators.required])],
      date: ["this sunday", Validators.compose([Validators.required])],
      time: ["09:00", Validators.compose([Validators.required])]
    });
    this.eventForm = this.fb.group({
      name: [""],
      state: ["", Validators.compose([Validators.required])]
    });
  }

  addDetails() {
    let details = this.detailsForm.value;
    this.details = [details];
  }

  addConfirmed() {
    let group = [];
    let person = this.eventForm.value;
    group.push(person);
    let newArray = this.players;
    if (newArray === undefined) {
      this.players = group;
    } else {
      this.players = group.concat(newArray);
    }
  }

  addEventDetails() {
    let group = [];
    this.eventDetails = group.concat(this.details, this.players);
  }

  deleteConfirmed(name: string) {
    let i = 0;
    let length = this.players.length;
    for (i; i < length; i++) {
      if (this.players[i]["name"] == name) {
        this.players.splice(i, 1);
      }
    }
  }

  submitDetails() {}

  addEvent() {
    this.eventsService.updateEvents(this.eventDetails).subscribe(
      repsonse => {
        this.router.navigate(["/"]),
          this.toastr.showSuccess(
            "Has been successfully created.",
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
}
