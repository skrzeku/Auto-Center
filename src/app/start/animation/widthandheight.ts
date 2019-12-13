import {animate, style, transition, trigger} from '@angular/animations';


export const widtheight =
  trigger('widtheight', [
    transition('void => *', [
      style({   height: '0'}),
      animate('0.3s ease', style({   height: '*'  }))
    ]),
    transition('* => void', [
      style({ width: '*', height: '*'}),
      animate('0.3s ease', style({  height: '0'  }))
    ])
  ]);
