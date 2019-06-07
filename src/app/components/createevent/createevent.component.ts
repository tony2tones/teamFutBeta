import { Component, ViewChild, OnInit } from "@angular/core";
import { EventsService } from "../../services/events.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastMessageService } from "../../services/toast-message.service";
=======

import { MatStepper } from "@angular/material";

import { Event } from "../../model/event.model";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";

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
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
    this.detailsForm = this.fb.group({
      title: ["Sunday Game", Validators.compose([Validators.required])],
      location: ["Mowbray", Validators.compose([Validators.required])],
      date: ["this sunday", Validators.compose([Validators.required])],
      time: ["09:00", Validators.compose([Validators.required])]
    });
    this.eventForm = this.fb.group({
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

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(filterValue) === 0);
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
    this.eventsService
      .updateEvents(this.eventDetails)
      .subscribe(
        repsonse => this.router.navigate(["/"]),
        error => console.log(error)
      );
  }
}
