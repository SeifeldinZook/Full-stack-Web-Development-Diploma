import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: "root",
})
export class URLguardGuard implements CanActivate {
  
  constructor(private _AuthenticationService: AuthenticationService, private _Router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._AuthenticationService.isLoggedIn()) {
      return true;
    } else {
      this._Router.navigate(["/signin"]);
      return false;
    }
  }
}
