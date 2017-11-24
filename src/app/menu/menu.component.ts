import { Component, OnInit , Output, EventEmitter, ViewChild} from '@angular/core';
import {Pizza} from '../@shared/classes/pizza';
import { DataService } from '../@shared/services/data.service';
import { Ingredient } from '../@shared/classes/ingredient';
import { Order } from '../@shared/classes/order';
import { ItemsComponent } from './items/items.component';
import { SelectedItemComponent } from './selected-item/selected-item.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [DataService]
})
export class MenuComponent implements OnInit {
  public pizzaList: Pizza[];
  public allIngredients: Ingredient[];
  public selectedPizza: any;
  public orderNumber: number = 1;

  constructor(private dataService: DataService) { }
  @Output() addOrder: EventEmitter<Order> = new EventEmitter<Order>(); 
  @ViewChild(ItemsComponent) itemsChild: ItemsComponent;
  @ViewChild(SelectedItemComponent) selectedItemChild: SelectedItemComponent;

  ngOnInit() {
    this.dataService.getPizzas().subscribe((pizzas: Pizza[]) => {
      this.pizzaList = pizzas.map(p => {
          return {
            id: p.id,
            name: p.name,
            price: p.price,
            ingredients: p.ingredients,
            size: p.size,
            photo: p.photo
          };
      });
    }, error => {
      console.debug(error);
    });
    this.dataService.getAllIngredients().subscribe((ingredients: Ingredient[]) => {
      this.allIngredients = ingredients.map(i => {
          return {
            id: i.id,
            name: i.name,
          };
      });
    }, error => {
      console.debug(error);
    });
  }


  public showPizza(e): void {
    this.selectedPizza = e;
  }
  
  public addPizzaToCart(e): void {
    if(this.selectedPizza != null){
      var pizza = this.selectedPizza;
      var newOrder = new Order();
        newOrder.id = this.orderNumber++;
        newOrder.name = pizza.name;
        newOrder.description = this.getPizzaIngredients(pizza.ingredients);
        newOrder.price = pizza.price;
        newOrder.size = this.itemsChild.selectedSize;
        newOrder.quantity = 1;
        newOrder.totalPrice = pizza.price;
      this.addOrder.emit(newOrder);
    }
    else {
      alert("pls select a pizza!");
    }
  }

  getPizzaIngredients(ids: number[]): string {
    var ingredientNames: string[] = [];
     for(let id of ids){
      ingredientNames.push(this.allIngredients.find(i=> i.id == id).name);
     }
     return ingredientNames.join();
  }

}
