import { Component, OnInit } from "@angular/core";
import { EventsService } from "../services/events.service";
import { Response } from "@angular/http";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "createevent",
  templateUrl: "./createevent.component.html",
  styleUrls: ["./createevent.component.css"]
})
export class CreateeventComponent implements OnInit{
  events: any[];
  myForm: FormGroup;
  // public confirmedList: FormArray;
  // public maybeList: FormArray;

  constructor(private fb: FormBuilder,private eventsService: EventsService) {}
  
  ngOnInit() {
    this.myForm = this.fb.group({
      title: '',
      confirmList: this.fb.array([])
      // maybeList: this.fb.array([])
    });
  }

    get confimredForm() {
      return this.myForm.get('confirmList') as FormArray;
    }

    addConfirmed() {
      const confirmed = this.fb.group({
        name:[]
      });
      this.confimredForm.push(confirmed);
      this.events.push(confirmed);
    }

    deleteConfirmed(i) {
      this.confimredForm.removeAt(i);
    }
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
    this.eventsService
      .updateEvents(this.events)
      .subscribe(
        (response: Response) => console.log(response),
        error => console.log(error)
      );
  }
}
