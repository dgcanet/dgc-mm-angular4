import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ItemsComponent } from './items/items.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';
import { MatRadioModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule
  ],
  declarations: [MenuComponent, ItemsComponent, SelectedItemComponent],
  exports: [MenuComponent, ItemsComponent, SelectedItemComponent]
})
export class MenuModule { }
