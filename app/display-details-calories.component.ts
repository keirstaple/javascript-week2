import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'display-details-calories',
  inputs: ['food'],
  template: `
    <h3> {{ food.name }} </h3>
    <h4> {{ food.details }} </h4>
    <h4> {{ food.calories }} </h4>
  `
})

export class DisplayDetailsCaloriesComponent {
  public food: Food;
}
