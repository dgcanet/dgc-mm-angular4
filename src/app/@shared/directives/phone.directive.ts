import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validPhone]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneDirective,
    multi: true
  }]
})
export class PhoneDirective {
  @Input() validPhone: string; 
  constructor(private el: ElementRef) { }

  validate(control: AbstractControl): ValidationErrors{
    var isValidElement: boolean = false;
    var isPhoneFormatValid: boolean = false;

    if(this.el.nativeElement.tagName === "INPUT" && 
       this.el.nativeElement.type === "text" &&
       this.el.nativeElement.classList.contains("phone")){
        isValidElement = true;
    }
    if(isValidElement){
      let phoneRegex : RegExp = new RegExp(/^((\([0-9]{3}\))|([0-9]{3}))+([0-9]{8})$/i);
      isPhoneFormatValid = phoneRegex.test(control.value);
    }
    return (isPhoneFormatValid) ?  null: {'invalidPhone' : {value: control.value}};
  }
}
