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
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  switchMode() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (this.loginMode) {
    } else {
      this.authService.signUp(email, password).subscribe(
        respData => {
          console.log(respData);
          this.isLoading = false;
        },
        errorRes => {
          console.log(errorRes);
          switch(errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              this.error = 'This email exists already';
          }

          this.isLoading = false;
        }
      );
    }
    form.reset();
  }
}
