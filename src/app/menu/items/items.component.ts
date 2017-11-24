import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DataService } from '../../@shared/services/data.service';
import { Pizza } from '../../@shared/classes/pizza';
import { Ingredient } from '../../@shared/classes/ingredient';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [DataService]
})
export class ItemsComponent implements OnInit {
  @Input() pizzas : Pizza[];
  public selectedSize: number;
  constructor(private dataService: DataService) { }
  @Output() selectPizza: EventEmitter<Pizza> = new EventEmitter<Pizza>();
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {

  }

  pizzaClick(id: number): void{
    let selectedPizza = this.pizzas.find(p=>p.id === id);
    
    this.selectPizza.emit(selectedPizza);
  }

  onSizeClick(size: number): void{
    this.selectedSize = size;
    this.sizeChange.emit(this.selectedSize);
  }
}
