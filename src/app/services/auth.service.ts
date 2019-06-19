import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  apiKey = "AIzaSyAzG5Vv0eRvIaeimyQamz8u3qj8oKwyG7o";

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${
          this.apiKey
        }`,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(errorRes => {
          let errorMessage = "An unknown error occurred!";
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          }
          switch (errorRes.error.error.message) {
            case "EMAIL_EXISTS":
              errorMessage = "This email already exists.";
          }
          return throwError(errorMessage);
        })
      );
  }
}
