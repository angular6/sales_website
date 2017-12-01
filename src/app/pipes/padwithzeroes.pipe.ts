import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padwithzeroes'
})
export class PadwithzeroesPipe implements PipeTransform {

  transform(value: any, args ? : any): any {

    var length = 6;
    var my_string = '' + value;
    while (my_string.length < length) { my_string = '0' + my_string; }
    return my_string

    
  }
}
