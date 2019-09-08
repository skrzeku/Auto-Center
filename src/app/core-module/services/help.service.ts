import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  mybol$ = new Subject<boolean>();

  constructor() { }


  shareCloseValue (bol: boolean): void {
    this.mybol$.next(bol);
    console.log(bol);
  }
}
