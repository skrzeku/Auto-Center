import {animate, style, transition, trigger} from '@angular/animations';


export const scale3dboth =
  trigger('scale3dboth', [
    transition('void => *', [
      style({ opacity: '0', transform: 'scale3d(0.2, 0.2, 0.2)'}),
      animate('0.5s ease-out', style({  opacity: 1, transform: 'scale3d(1, 1, 1)'  }))
    ]),
    transition('* => void', [
      style({ opacity: '1', transform: 'scale3d(1, 1, 1)'}),
      animate('0.5s ease-out', style({  opacity: 0, transform: 'scale3d(0.2, 0.2, 0.2)'  }))
    ])
  ]);
