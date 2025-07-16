import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'italic',
})
export class ItalicPipe implements PipeTransform {
  transform(value: string): string {
    const regex = new RegExp(/([_])(?:(?=(\\?))\2.)*?\1/g, 'gi');
    return value.replace(
      regex,
      (match) => `<em>${match.replace(/_/g, '')}</em>`,
    );
  }
}
