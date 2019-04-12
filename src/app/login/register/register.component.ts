import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  lvpoolrandom: any;
  barcarandom: any;
  score: any;


  constructor() {
  }

  ngOnInit() {
  }
          //just for fun
  obstaw(): void {
    const lvpoolscroe: string[] = [
      '3:1', '3:1', '3:0', '2:1', '2:0'
    ];
    const barcascore: string[] = [
      '0:2', '0:2', '1:3', '1:2', '0:1'
    ];
    const myarray = [];
    for (let i = 0; i <= lvpoolscroe.length - 1; i++) {

      const lvpool = 'Liverpool : Porto';
      const barca = 'Manu : Barca';
      this.lvpoolrandom = lvpoolscroe[(Math.random() * lvpoolscroe.length) | 0];
      this.barcarandom = barcascore[(Math.random() * barcascore.length) | 0];
      this.score = lvpool + ':' + this.lvpoolrandom + '     ' + barca + ':' + this.barcarandom + '\n' + '\n';
      console.log(this.score);
    };
    alert(myarray );




  }
}
