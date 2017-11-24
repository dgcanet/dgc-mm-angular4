import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import { DataService } from './/../../@shared/services/data.service';
import { Observable } from 'rxjs/Observable';
import { Pizza } from '../../@shared/classes/pizza';
import { Ingredient } from '../../@shared/classes/ingredient';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css'],
  providers: [DataService]
})
export class SelectedItemComponent implements AfterViewInit, OnInit {
  @Input() shownPizza: Pizza;
  @Input() ingredients: Ingredient[];

  constructor(private dataService: DataService) { 
  }

  ngAfterViewInit() {
    this.shownPizza = this.dataService.selectedPizza as any;
    this.ingredients = this.dataService.allIngredients as any;
  }

  ngOnInit(){

  }
  
  getIngredientName(id: number):string {
    var ingredient = this.ingredients.find(i => i.id == id);
    return ingredient.name;
  }
}
