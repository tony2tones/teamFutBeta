import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  isAuthenticated: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) {}

  ngOnInit() {
   this.userSub = this.authService.user.subscribe(user => {
    this.isAuthenticated = !!user;
   });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
