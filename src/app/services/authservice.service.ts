import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService implements OnDestroy {
  /** User object snapshot */
  public user: User = null;
  private sub: Subscription;
  
  /** User object observable */
  get user$(): Observable<User|null> {
    return this.fire.user;
  }

  constructor(readonly fire: AngularFireAuth) {
    // Keeps a snapshot of the current user object
    this.sub = this.user$.subscribe( user => {
      this.user = user;
    });
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

  /** Returns true if user is logged in */
  get authenticated(): boolean {
    return !!this.user;
  }

  /** Returns the current user id, when authenticated */
  get userId(): string {
    return this.authenticated ? this.user.uid : '';
  }

  /**
   * Registers a new user by email and confirmPasswordReset
   * @param email the email to register with
   * @param password the secret password
   * @param name (optional) the user name
   */
  public registerNew(email: string, password: string, name: string = ""): Promise<void> {
    
    console.log("Registering a new user: " + email);
    // Create a new user with email and password
    return this.fire.auth.createUserWithEmailAndPassword(email, password)
      // Update the user info with the given name
      .then( credential => credential.user.updateProfile({ displayName: name } as User));
  }

  /**
   * Signs in with the given user email and password
   * @param email the email to register with
   * @param password the secret password 
   * @returns the authenticated User object
   */
  public signIn(email: string, password: string): Promise<User>  {
    
    console.log("Signing in as: " + email);

    return this.fire.auth.signInWithEmailAndPassword(email, password)
      .then( credential => credential.user );
  }

}
