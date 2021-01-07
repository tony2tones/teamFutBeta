import { Component, ViewChild, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastMessageService } from '../../services/toast-message.service';

import { MatStepper } from '@angular/material';
import { Event } from '../../model/event.model';
import { Player } from '../../model/event.model';

export interface User {
  name: string;
}
@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  eventForm: FormGroup;
  detailsForm: FormGroup;

  event: Event;
  isLinear = true;
  @ViewChild('step1') stepper: MatStepper;

  attendingState: Array<string> = ['Confirmed', 'Maybe'];
  eventDetails: Event[];
  details: Event;
  players: Player[] = [];
  player: Player;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    private router: Router,
    private toastr: ToastMessageService
  ) {}

  ngOnInit() {
    this.detailsForm = this.fb.group({
      title: ['Sunday Game', Validators.compose([Validators.required])],
      location: ['Mowbray', Validators.compose([Validators.required])],
      date: ['this sunday', Validators.compose([Validators.required])],
      time: ['09:00', Validators.compose([Validators.required])]
    });
    this.eventForm = this.fb.group({
      name: [''],
      state: ['', Validators.compose([Validators.required])]
    });
  }

  addDetails() {
    this.details = this.detailsForm.value;
  }

  addConfirmed() {
    this.player = this.eventForm.value;
    let newArray = [];
    this.players.push(...newArray, this.player);
  }

  addEventDetails() {
    let group = [];
    this.eventDetails = group.concat(this.details, this.players);
  }

  deleteConfirmed(name: string) {
    return this.players.filter(value => {
      if(value.name === name) {
        return this.players.splice(this.players.indexOf(value),1);
      }
    }) 
  }

  addEvent() {
    this.eventsService.updateEvents(this.eventDetails).subscribe(
      repsonse => {
        this.router.navigate(['/']),
          this.toastr.showSuccess(
            'Has been successfully created.',
            'Footy game'
          );
      },
      error => {
        console.log(error);
        this.toastr.showFail(
          'Something went wrong, please select the reset option to try again.',
          'Error'
        );
      }
    );
  }
}
