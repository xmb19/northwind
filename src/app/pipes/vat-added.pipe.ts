import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
  standalone: false
})
export class VatAddedPipe implements PipeTransform {
  transform(value: number, rate:number): number {
    return value + (value * rate / 100);
  }
  
}
