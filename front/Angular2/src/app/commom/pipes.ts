import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}


@Pipe({name: 'toArray'})
export class ToArrayPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let values = [];
    for (let key in value) {
        values.push(value[key]);
    }
    return values;
  }
}