import {Component, HostListener, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.less']
})
export class AutomobileComponent implements OnInit {



  firstclicked: number;


  constructor(private rend: Renderer2) { }

  ngOnInit() {
  }





  sendspan(num: number, event): void {
    this.firstclicked = num;
    const elementText = event.target.innerText;
    console.log(elementText);
  }
}
