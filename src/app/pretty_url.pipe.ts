import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyurl'
})
export class PrettyurlPipe implements PipeTransform {

  transform(value: any, args ? : any): any {

    return value.toLowerCase().replace(/ /gi, "_")

  }

}
