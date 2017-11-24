import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelDirective } from './directives/label.directive';
import { ZipDirective } from './directives/zip.directive';
import { PhoneDirective } from './directives/phone.directive';

@NgModule({
  imports: [
  CommonModule
  ],
  declarations: [LabelDirective, ZipDirective, PhoneDirective],
  exports:[LabelDirective, ZipDirective, PhoneDirective]
})
export class SharedModule { }

