import {Component, HostListener, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.less']
})
export class AutomobileComponent implements OnInit {
  filteredOptions = ['lol', 'lol2'];
  mark = '';
  model = '';
  price_from = '';
  price_to = '';
  year_from = '';
  year_to = '';
  course_from = '';
  course_to = '';





  firstclicked: number;


  constructor(private rend: Renderer2) { }

  ngOnInit() {
    console.log(this.mark);

  }

  works() {
    console.log('siema');
  }





  sendspan(num: number, event): void {
    this.firstclicked = num;
    const elementText = event.target.innerText;
    console.log(elementText);
  }
}
