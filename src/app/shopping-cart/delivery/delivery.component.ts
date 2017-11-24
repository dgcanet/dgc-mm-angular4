import { Component, NgModule, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../@shared/classes/customer';
import { Address } from '../../@shared/classes/address';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
  providers: []
})

export class DeliveryComponent implements OnInit {
  public customer: Customer;
  @Output() deliveryFormInfo = new EventEmitter<any>();

  constructor() {
   }
  
  ngOnInit() {
    this.customer = new Customer();
    this.customer.firstname = "";
    this.customer.lastname = "";
    this.customer.address = new Address();
    this.customer.address.street = "";
    this.customer.address.city = "";
    this.customer.address.zip = "";
    this.customer.email = "";
    this.customer.contactnumber = null;
  }

  onOrder(deliveryForm){
    this.deliveryFormInfo.emit(deliveryForm);
  }
}
