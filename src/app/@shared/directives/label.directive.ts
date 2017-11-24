import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
@Directive({
  selector: '[labelValue]'
})

export class LabelDirective implements AfterViewInit {
  @Input() labelValue: string;

  constructor(private el: ElementRef) { 
    
  }

  ngAfterViewInit(){
    if(this.el.nativeElement.tagName === "LABEL"){
      this.el.nativeElement.innerHTML = this.labelValue + ":";
    }
  }
}
