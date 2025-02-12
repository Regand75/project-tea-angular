import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReduction'
})
export class TextReductionPipe implements PipeTransform {

  transform(value: string, maxLength: number = 210): string {
    if (!value) {
      return '';
    }
    if (value.length <= maxLength) {
      return value;
    }
    return value.substring(0, maxLength) + '...';
  }

}
