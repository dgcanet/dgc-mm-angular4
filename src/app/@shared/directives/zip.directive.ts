import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { InputValidators } from '../validators/input-validators';
import { DataService } from '../services/data.service';
import { Zip } from '../classes/zip';

@Directive({
  selector: '[validZip]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ZipDirective,
    multi: true
  }, DataService]
})

export class ZipDirective implements Validator , AfterViewInit{
  @Input() validZip: string; 
  public zipCodes: Zip[];

  constructor(private el: ElementRef, private dataService: DataService) {

   }

   ngAfterViewInit(){
    this.dataService.getAllZip().subscribe((zipCodes: Zip[]) => {
      this.zipCodes = zipCodes.map(z => {
          return {
            id: z.id,
            name: z.name,
            code: z.code
          };
      });
    }, error => {
      console.debug(error);
    });
   }

  validate(control: AbstractControl): ValidationErrors{
      var isValidElement: boolean = false;
      var isZipFormatValid: boolean = false;
      var isLegitZip: boolean = false;

      if(this.el.nativeElement.tagName === "INPUT" && 
         this.el.nativeElement.type === "text" &&
         this.el.nativeElement.classList.contains("zip")){
          isValidElement = true;
      }
      if(isValidElement){
        let zipRegEx : RegExp = new RegExp(/^([a-zA-Z]{2}\d{2}\s?)+(\d{1}[a-zA-Z]{2})/i);
        isZipFormatValid = zipRegEx.test(control.value);
      }
      if(isZipFormatValid){  
        isLegitZip = InputValidators.ValidateZipCode(this.zipCodes, control.value);
      }
      
      return (isLegitZip) ?  null: {'invalidZip' : {value: control.value}};
    }
}
