import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageChange'
})
export class PercentageChangePipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0) {
      return `+${value.toFixed(2)}%`;
    } else if (value < 0) {
      return `${value.toFixed(2)}%`;
    } else {
      return '0%';
    }
  }
}