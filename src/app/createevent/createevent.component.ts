import { Component, OnInit } from "@angular/core";
import { EventsService } from "../services/events.service";
import { Response } from "@angular/http";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "createevent",
  templateUrl: "./createevent.component.html",
  styleUrls: ["./createevent.component.css"]
})
export class CreateeventComponent implements OnInit {
  events: any[];
  public form: FormGroup;
  public confirmedList: FormArray;
  public maybeList: FormArray;

  constructor(private fb: FormBuilder, private eventsService: EventsService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      confirmList: this.fb.array([this.confirmedList]),
      maybeList: this.fb.array([this.maybeList])
    });

    this.confirmedList = this.form.get('confirmed') as FormArray;
    this.maybeList = this.form.get('maybe') as FormArray;
  }

  createEvent(): FormGroup {
    return this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      time: [null, Validators.compose([Validators.required])],
      location: [null, Validators.compose([Validators.required])]
    }); 
  }

  addEvent() {
    this.eventsService
      .updateEvents(this.events)
      .subscribe(
        (response: Response) => console.log(response),
        error => console.log(error)
      );
  }
}
