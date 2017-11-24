import { Component, OnInit, Input } from '@angular/core';
import {Order} from '../../@shared/classes/order';
import {Customer} from '../../@shared/classes/customer';
import {Address} from '../../@shared/classes/address';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() summaryItems: Order[];
  
  @Input() customer: Customer;
  
  constructor() { }

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

}
