import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: 'foodList',
  template: `
    <h3 *ngFor="#currentFood of foodList" (click)="foodWasClicked(currentFood)">
      {{ currentFood.name }}
    </h3>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  foodWasClicked(clickedFood: Food): void {
    console.log(clickedFood);
  }
}
