import { Pipe, PipeTransform } from '@angular/core';
import { JSDocCommentStmt } from '@angular/compiler';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(items: any[], searchQuery: string): any[] {
    console.log('transform ' + JSON.stringify(items) + " " + JSON.stringify(searchQuery));
    if (!searchQuery) {
      return items;
  }
  return items.filter(item => item.name.indexOf(searchQuery) !== -1);
  }
}
