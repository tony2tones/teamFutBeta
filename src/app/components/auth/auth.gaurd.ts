import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Injectable({ providedIn: "root" })
export class AuthGaurd implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
      return this.authService.user.pipe(
          take(1),
          map(user => {
          const isAuth = !! user;
          if(isAuth) {
              return true;
          }
          return this.router.createUrlTree(['/auth']);
      }))
  }
}
