import { Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {Order} from '../../@shared/classes/order';
import { NgClass } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Output() orders = new EventEmitter<Order[]>();
  public cartItems: Order[] = [];
  @Input() totalPrice: number = 0;
  @Output() totalPriceChange = new EventEmitter<number>();
  public selectedCartItem: Order;
  constructor(public dialog: MatDialog) { }
  public dialogname: string = "Are you sure you want to delete this order?";
  ngOnInit() {

  }

  addCartItem(order: Order){
    this.cartItems.push(order);
    this.orders.emit(this.cartItems);
  }

  onQuantityChange(qty: number, cartItem: Order): number{
    var pizza = this.selectedCartItem;
    pizza.totalPrice = qty * cartItem.price;
    this.totalPriceChange.emit(pizza.totalPrice);
    
    return cartItem.totalPrice;
  }
  onRowSelect(id: number){
      this.selectedCartItem = this.cartItems.find(ci=>ci.id===id);
  };
  deleteOrder(id: number){
    var index = this.cartItems.findIndex(ci=>ci.id == id);
    if(index > -1){
      this.cartItems.splice(index, 1);
    }
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.deleteOrder(this.selectedCartItem.id);
      }
    });
  }
}


@Component({
  selector: 'dialog',
  template: '<h2 mat-dialog-title>Delete Order</h2><mat-dialog-content>Are you sure?</mat-dialog-content><mat-dialog-actions><button mat-button mat-dialog-close>No</button><button mat-button [mat-dialog-close]="true">Yes</button> </mat-dialog-actions>'
})
export class DeleteDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
