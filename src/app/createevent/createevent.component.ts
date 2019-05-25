import { Component, OnInit } from "@angular/core";
import { EventsService } from "../services/events.service";
import { Response } from "@angular/http";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";

import { Event } from "../model/event.model";
@Component({
  selector: "createevent",
  templateUrl: "./createevent.component.html",
  styleUrls: ["./createevent.component.css"]
})
export class CreateeventComponent implements OnInit {
  event: Event;
  eventForm: FormGroup;
  attendingState: Array<string> = ["Confirmed", "maybe"];
  players:any[];
  // player = { name: "", status: "" };

  constructor(private fb: FormBuilder, private eventsService: EventsService) {}

  ngOnInit() {
    this.eventForm = this.fb.group({
      // title: ['', Validators.compose([Validators.required])],
      name: ["", Validators.compose([Validators.required])],
      state: ["", Validators.compose([Validators.required])]
    });
  }

  addConfirmed() {
    let player = this.eventForm.value;
    this.players.push(this.players, {...player });
    console.log("players collection value ", this.players);
    // this.player = { name: "", status: "" };
  }


  // deleteConfirmed(i) {
  //   this.confimredForm.removeAt(i);
  // }
  //   this.confirmedList = this.form.get('confirmed') as FormArray;
  //   this.maybeList = this.form.get('maybe') as FormArray;
  // }

  // createEvent(): FormGroup {
  //   return this.fb.group({
  //     title: [null, Validators.compose([Validators.required])],
  //     date: [null, Validators.compose([Validators.required])],
  //     time: [null, Validators.compose([Validators.required])],
  //     location: [null, Validators.compose([Validators.required])]
  //   });
  // }

  addEvent() {
    this.players = this.eventForm.value;
    console.log(
      "event for value ",
      this.eventForm.value,
      "players collection value ",
      this.players
    );
    // this.eventsService
    //   .updateEvents(this.events)
    //   .subscribe(
    //     (response: Response) => console.log(response),
    //     error => console.log(error)
    //   );
  }
}
