import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartItemComponent } from './cart-item/cart-item.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SummaryComponent } from './summary/summary.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { SharedModule } from '../@shared/shared.module';
import  {DeleteDialog} from './cart-item/cart-item.component'
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    DeleteDialog
  ],
  declarations: [ ShoppingCartComponent, DeliveryComponent, CartItemComponent, SummaryComponent, DeleteDialog],
  exports: [ ShoppingCartComponent, DeliveryComponent, CartItemComponent, SummaryComponent ,DeleteDialog, MatFormFieldModule, MatButtonModule, MatInputModule, MatDialogModule]
})
export class ShoppingCartModule { }
