import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../services/data.service';
import { Zip } from '../classes/zip';

export class InputValidators {
   static ValidateZipCode(zipCodes: Zip[], inputValue: string) : boolean {
      return (zipCodes.find(z=> z.code === inputValue) != undefined);
    }
}
