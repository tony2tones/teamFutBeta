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
  @ViewChild('step1', {static: false}) stepper: MatStepper;

  attendingState: Array<string> = ['Confirmed', 'Maybe'];
  eventDetails: Event[] = [];
  details: any;
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
      time: ['09:00', Validators.compose([Validators.required])],
      players : []
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
    // let group;
    console.log('details ', this.details, 'players ', ...this.players);
    this.eventDetails.push(this.details);
    this.details.players = this.players;
    console.log('THE DEETs', this.eventDetails);
    // this.eventDetails = group.concat(this.details, this.players);
    // this.eventDetails = group = this.details.push(this.players)
  }

  deleteConfirmed(name: string) {
    return this.players.filter(value => {
      if(value.name === name) {
        return this.players.splice(this.players.indexOf(value),1);
      }
    }) 
  }

  addEvent() {
    console.log('submitted details ', this.eventDetails)
    this.eventsService.createEvent(this.eventDetails).then(() => {
      console.log('errotr');
    })
    // this.eventsService.updateEvents(this.eventDetails).subscribe(
    //   repsonse => {
    //   console.log('the full details ', this.eventDetails);

    //     this.router.navigate(['/']),
    //       this.toastr.showSuccess(
    //         'Has been successfully created.',
    //         'Footy game'
    //       );
    //   },
    //   error => {
    //     console.log(error);
    //     this.toastr.showFail(
    //       'Something went wrong, please select the reset option to try again.',
    //       'Error'
    //     );
    //   }
    // );
  }
}
