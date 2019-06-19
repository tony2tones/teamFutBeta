import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class AuthService {
    apiKey="AIzaSyAzG5Vv0eRvIaeimyQamz8u3qj8oKwyG7o";
    
    constructor (private http: HttpClient) {}

    signUp(email: string, password:string ) {
        return this.http.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${apiKey}`,
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }
}