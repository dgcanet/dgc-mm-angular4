import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Order} from '../@shared/classes/order';
import {Customer} from '../@shared/classes/customer';
import {Address} from '../@shared/classes/address';
import {DeliveryComponent} from './delivery/delivery.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {SummaryComponent} from './summary/summary.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @ViewChild(CartItemComponent) cartItemChild: CartItemComponent;
  @ViewChild(DeliveryComponent) deliveryItemChild: DeliveryComponent;
  @ViewChild(SummaryComponent) summaryItemChild: SummaryComponent;

  constructor() { }

  public orderItems: Order[];
  public customerInfo: Customer;
  public title: string;
  public isSummaryShown: boolean;

  ngOnInit() {
    this.title = "Shopping Cart";
    this.isSummaryShown = false;
    this.orderItems = [];
  }

  addOrderItem(order: Order){
    //this.orderItems.push(order);
    this.cartItemChild.addCartItem(order);
  }
  orderNow(deliveryInfo: any){
    var info = deliveryInfo.form.value;
    this.isSummaryShown = (deliveryInfo.submitted && deliveryInfo.form.status != "INVALID" && this.orderItems.length > 0);
    this.customerInfo = new Customer();
    this.customerInfo.firstname = info.firstname;
    this.customerInfo.lastname = info.lastname;
    this.customerInfo.address = new Address();
    this.customerInfo.address.street = info.street;
    this.customerInfo.address.city = info.city;
    this.customerInfo.address.zip = info.zip;
    this.customerInfo.email = info.email;
    this.customerInfo.contactnumber = info.contactnumber;
    this.title = "Order Summary";
  }
  getOrders(orders: Order[]){
    this.orderItems = orders;
  }

}
