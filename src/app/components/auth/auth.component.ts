import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  loginMode: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  switchMode() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    if (this.loginMode) {
      
    } else {
      this.authService.signUp(email, password).subscribe(
        respData => {
          console.log(respData);
        },
        error => console.log(error)
      );
      
    }
    form.reset();
  }
}
