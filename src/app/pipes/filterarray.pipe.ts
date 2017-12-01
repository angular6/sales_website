import { Pipe, PipeTransform } from '@angular/core';
//import 'rxjs/add/operator/map';

@Pipe({
  name: 'filterarray',
})
export class FilterarrayPipe implements PipeTransform {

  transform(xes: any[], arg: any): any {
    if (arg == undefined) { return [] }
    return xes.filter(x => x.name.toLowerCase().indexOf(arg.toLowerCase()) != -1)
  }

}
