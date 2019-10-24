import {Injectable} from '@angular/core';
import {CanLoad, Route, Router} from '@angular/router';
import {AuthorizationService} from './authorization.service';
import {Observable} from 'rxjs';

@Injectable()
export class CanloadGuard implements CanLoad {
  constructor(private authService: AuthorizationService, private router: Router) {}

  canLoad(route: Route): boolean {


    if (this.authService.isLogedin()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }


  }
}
