import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Pizza} from '../classes/pizza';
import {Ingredient} from '../classes/ingredient';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Zip } from '../classes/zip';

@Injectable()
export class DataService {
  public selectedPizza: Observable<Pizza>;
  public selectedPizzaIngredient: Ingredient;
  public allPizza: Observable<Pizza[]>;
  public allIngredients: Observable<Ingredient[]>;
  public allZip: Observable<Zip[]>;
  constructor(private http: Http) { }

  getPizzas(): Observable<Pizza[]> {
    this.allPizza = this.http.get('data/Pizza.json').map(
        (response) => response.json()
    );

    return this.allPizza;
  }
  getPizzaById(id: number): Observable<Pizza> {
    this.selectedPizza =  this.http.get('data/Pizza.json').map(
      function(pizza){
        return pizza[id];
      });
    return this.selectedPizza;
  }

  getAllIngredients(): Observable<Ingredient[]> {
    this.allIngredients = this.http.get('data/Ingredients.json').map(
        (response) => response.json()
    );

    return this.allIngredients;
  }

  getAllZip(): Observable<Zip[]>{
    this.allZip = this.http.get('data/Zip.json').map(
      (response) => response.json()
    );

    return this.allZip;
  }
}
