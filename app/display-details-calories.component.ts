import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'display-details-calories',
  inputs: ['food'],
  template: `
    <div class="displayDetails">
      <h3> {{ food.name }} || {{ food.details }} || {{ food.calories }}</h3>
    </div>
  `
})

export class DisplayDetailsCaloriesComponent {
  public food: Food;
}
