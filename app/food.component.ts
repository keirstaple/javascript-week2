import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `

    <h3>{{ food.name }}</h3>
    <div class="hiddenDetails">
      <h4> {{ food.details }}</h4>
      <h4> {{ food.calories }}</h4>
    </div>
  `
})

export class FoodComponent {
  public food: Food;
}
