import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchContent'
})
export class SearchContentPipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    if(!value) return [];
    if(!args) return value;
    console.log(args);
    const searchParam = args[0].toLowerCase();
    const title = args[1] === 'workout' ? 'workoutTitle' : '';
    return value.filter(val => {
      return val[title].toLowerCase().includes(searchParam);
    });
  }
}
