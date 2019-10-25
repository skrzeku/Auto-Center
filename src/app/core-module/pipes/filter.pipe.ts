import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {Filter} from '../models/filter.model';



@Pipe({
  name: 'myfilter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform( array: Array<any>, filters: Array<Filter>): Array<any> {
    if (!array) return [];
    if (!filters) return array;

    return array.filter(item => matchAll(item, filters));
  }
}

function matchAll(item: any, filters: Array<Filter>): boolean {
  let valid = true;
  for (const filter of filters) {
    if (!hasKey(item, filter.name)
      || ((item[filter.name] !== filter.value) && (item[filter.name] !== filter.value2))
      &&
      ((item[filter.name] <= filter.value) || (item[filter.name] >= filter.value2)))   {
      valid = false;
      break;
    }
  }

  return valid;
}

function hasKey(item: any, keyName: string): boolean {
  return Object.keys(item).indexOf(keyName) !== -1;
}
