import { Component } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food Log</h1>
      <food-list
        [foodList]="foods">
      </food-list>
    </div>
  `
  //[foodList] is an input instantiated in food-list from the FoodListComponent. We are setting it equal to the property foods, where Food[] identifies foods as an array of Food objects. 
})

export class AppComponent {
  public foods: Food[];// Food[] (or Array<Food>) identifies tasks as an array of Task objects. Notice below that tasks is an array of new Task objects. Refer to tasks with this.
  constructor(){
      this.foods = [
        new Food('Thai', 'I ate all of it', 400, 0)
      ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log(clickedFood);
  }
}
