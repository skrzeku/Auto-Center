import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthorizationService} from './authorization.service';
import {MatSnackBar} from '@angular/material';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private toast: MatSnackBar
  ) {}



  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.authService.authState$.pipe(map(state => {
        if (state !== null) {
          return true;
        }
        this.router.navigate(['/login'])
          .then(error => this.toast.open("Sorry you're not authorized to view this page"));
        return false;
      }
      )
    );
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.authState$) {
      return true;
    }
    this.router.navigate(['login'])
      .then(error => this.toast.open("Sorry you're not authorized to view this page"));

    return false;

  }
}
