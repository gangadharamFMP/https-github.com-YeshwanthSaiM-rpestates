import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: any, prefix = '') {
    console.log(value)
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }


}
