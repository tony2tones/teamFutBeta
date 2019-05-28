import { Component, ViewChild, OnInit } from "@angular/core";
import { EventsService } from "../../services/events.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
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
  public players: any[];
  player: string;

  constructor(private fb: FormBuilder, private eventsService: EventsService) {}

  ngOnInit() {
    this.detailsForm = this.fb.group({
      title: ["Sunday Game", Validators.compose([Validators.required])],
      location: ["Mowbray", Validators.compose([Validators.required])],
      date: ["this sunday", Validators.compose([Validators.required])],
      time: ["09:00", Validators.compose([Validators.required])]
    });
    this.eventForm = this.fb.group({
      name: ["", Validators.compose([Validators.required])],
      state: ["", Validators.compose([Validators.required])]
    });
  }

  get title() {
    return this.detailsForm.get("title");
  }
  get location() {
    return this.detailsForm.get("location");
  }
  get date() {
    return this.detailsForm.get("date");
  }
  get time() {
    return this.detailsForm.get("time");
  }

  addConfirmed() {
    let group = [];
    let person = this.eventForm.value;
    console.log('checking form value', person);
    group.push(person);
    let newArray = this.players;
    if (newArray === undefined) {
      this.players = group;
    } else {
      this.players = group.concat(newArray);
      console.log("this is the group value ", this.players);
    }
  }

  // deleteConfirmed(i) {
  //   this.confimredForm.removeAt(i);
  // }
  //   this.confirmedList = this.form.get('confirmed') as FormArray;
  //   this.maybeList = this.form.get('maybe') as FormArray;
  // } https://www.youtube.com/watch?v=r-n5lpG1hxY

  submitDetails() {}

  addEvent() {
    return true;
    //   this.players = this.eventForm.value;
    //   console.log(
    //     "event for value ",
    //     this.eventForm.value,
    //     "players collection value ",
    //     this.players
    // );
    // this.eventsService
    //   .updateEvents(this.events)
    //   .subscribe(
    //     (response: Response) => console.log(response),
    //     error => console.log(error)
    //   );
  }
}
