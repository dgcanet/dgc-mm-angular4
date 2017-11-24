import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Order} from './@shared/classes/order';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  @ViewChild(MenuComponent) menuChild: MenuComponent;
  @ViewChild(ShoppingCartComponent) shoppingChild: ShoppingCartComponent;

  public orderList: Order[] = [];

  ngOnInit(){
  }
  
  public addOrder(order: Order): void {
    this.shoppingChild.addOrderItem(order);
  }
}
