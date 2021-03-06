import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
    <div class="edit-food-form">
      <h6>Edit {{ food.name }}:</h6>
      <input [(ngModel)]="food.name" class="col-sm-8 input-sm task-form"/>
      <input [(ngModel)]="food.details" class="col-sm-8 input-sm task-form"/>
      <input [(ngModel)]="food.calories" class="col-sm-8 input-sm task-form"/>
    </div>
  `
  //[(ngModel)], inside an <input> tag. Remember that square brackets define input and parenthesis define output? Here we are using both at once to show that data is travelling in both directions. If we modify the model somewhere else, we want our view to display it.
})

export class EditFoodComponent {
  public food: Food;
}
