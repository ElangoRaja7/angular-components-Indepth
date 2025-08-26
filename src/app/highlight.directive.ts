import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  
  @Input('color')color:string="yellow";

  constructor(private element:ElementRef,private render:Renderer2) {
  
  
   }

   @HostListener('mouseenter')addHighlight(){
    this.render.setStyle(this.element.nativeElement,'backgroundColor', this.color);
   }
   @HostListener('mouseleave')removeHighlight(){
  this.render.setStyle(this.element.nativeElement,'backgroundColor', null);
   }

}
