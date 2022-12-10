import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor(private el:ElementRef ) {
    console.log("Custom Directies");
    el.nativeElement.style
    
   }

}
