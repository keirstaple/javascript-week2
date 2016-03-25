import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  // directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food Log</h1>
      <h3 *ngFor="#food of foods">
        {{ food.name }}<br>
        {{ food. details}}<br>
        {{ food.calories }}
      </h3>
      <food-list></food-list>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];// Food[] (or Array<Food>) identifies tasks as an array of Task objects. Notice below that tasks is an array of new Task objects. Refer to tasks with this.
  constructor(){
      this.foods = [
        new Food('Thai', 'I ate all of it', 400, 0)
      ];
  }
}
