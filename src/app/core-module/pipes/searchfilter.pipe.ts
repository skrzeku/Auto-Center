import {Injectable, Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'searchfilter',
  pure: false
})
@Injectable()
export class Ng2SearchPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === undefined) {
      return items;
    }
    return items.filter((item) =>
      Object.keys(item).some(k => item[k].includes(term.toLowerCase())
      )
  );
  }
}
