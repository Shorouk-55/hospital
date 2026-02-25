import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vaildations'
})
export class VaildationsPipe implements PipeTransform {

  transform(value: any, errors: any): string {
    return errors ? errors![Object.keys(errors!)[0]]['message'] : '';
  }

}
