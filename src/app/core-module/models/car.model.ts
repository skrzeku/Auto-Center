export interface Car {
  category: string;    //
  color: string;       //
  course: number;       //
  engine_capacity: number;       //
  from: string;
  fuel: string;           //
  gearcase: string;       //
  id: number;
  mark: string;     //
  model: string;        //
  power: number;        //
  state: string;        //
  version: string;      //
  year: number;
  key: string;
  price: number;
  start_date: string;
  premium: boolean;
  vat: boolean;
  description: string;
  type: string;
  shortdescription: string;

}
export class Image {
  key: string;
  id: number;
  url: string;
  file: File;

  constructor(file: File) {
  this.file = file;
}
}




        //next time i'm gonna use Json2ts !!!!
