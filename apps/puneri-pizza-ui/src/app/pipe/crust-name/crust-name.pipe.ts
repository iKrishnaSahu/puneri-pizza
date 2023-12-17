import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crustName',
  standalone: true,
})
export class CrustNamePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.split('_').join(' ');
  }
}
