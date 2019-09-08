import { Component, OnInit } from '@angular/core';
import {HelpService} from '../services/help.service';

@Component({
  selector: 'app-left-navis',
  templateUrl: './left-navis.component.html',
  styleUrls: ['./left-navis.component.less']
})
export class LeftNavisComponent implements OnInit {

  constructor(private helpservice: HelpService) { }

  ngOnInit() {
  }
  sharedbool(): void {
    this.helpservice.shareCloseValue(false);
  }

}
