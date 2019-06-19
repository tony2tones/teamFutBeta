import { Component, OnInit } from '@angular/core';
import  {NgForm}  from '@angular/forms'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

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
