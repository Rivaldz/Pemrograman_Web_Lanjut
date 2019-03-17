import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat')format;

  // @HostListener('focus') onfocus(){
  //   console.log("onFocus")
  // }

  constructor(private el:ElementRef) { }

  @HostListener('blur')onblur(){
  //  console.log("onBlur")
  let value:string = this.el.nativeElement.value;
  if(this.format=='uppercase')
    this.el.nativeElement.value = value.toLowerCase();
  
  else
    this.el.nativeElement.value = value.toUpperCase();
  }

}
