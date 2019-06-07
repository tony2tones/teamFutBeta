import { Component, ViewChild, OnInit } from "@angular/core";
import { EventsService } from "../../services/events.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastMessageService } from "../../services/toast-message.service";

import { MatStepper } from "@angular/material";

import { Event } from "../../model/event.model";
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

  attendingState: Array<string> = ["Confirmed", "maybe"];
  eventDetails: any[];
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
    console.log("checking if we are capturing deets ", details);
    this.details = [details];
    console.log(
      "checking if we are capturing deets into details",
      this.details
    );
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

  // deleteConfirmed(i) {
  //   this.confimredForm.removeAt(i);
  // }
  //   this.confirmedList = this.form.get('confirmed') as FormArray;
  //   this.maybeList = this.form.get('maybe') as FormArray;
  // } https://www.youtube.com/watch?v=r-n5lpG1hxY

  submitDetails() {}

  addEvent() {
    this.eventsService.updateEvents(this.eventDetails).subscribe(
      repsonse => {
        this.router.navigate(["/"]),
          this.toastr.showSuccess(
            "Has been successfully created",
            "Footy game"
          );
      },
      error => {
        console.log(error);
        this.toastr.showFail("Something went wrong", "Error");
      }
    );
  }
}
