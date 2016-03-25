import { Component } from 'angular2/core';
import { EditFoodComponent } from './edit-food.component';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  directives: [EditFoodComponent]
  template: `

    <h3>{{ food.name }}</h3>
    <edit-food *ngIf="selectedFood" [food]="selectedFood">
    </edit-food>
  `
})

export class FoodComponent {
  public food: Food;
  public selectedFood: Food;
  this.selectedFood = clickedFood;
}
