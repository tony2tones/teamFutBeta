import { Component, OnInit } from '@angular/core';
import  {NgForm}  from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginMode:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  switchMode() {
    this.loginMode = !this.loginMode;
    
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
