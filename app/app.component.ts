import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food Log</h1>
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
  //[foodList] is an input instantiated in food-list from the FoodListComponent. We are setting it equal to the property foods, where Food[] identifies foods as an array of Food objects.

  //tell the <food-list> component to connect its output onFoodSelect, our custom event emitter, to the parent method foodWasSelected. Because it is a custom event, we receive the actual event itself, defined by the argument $event. Then, inside of the method we can treat it as a normal Food object, because this is what we passed in from the child component when we emitted the event.
})

export class AppComponent {
  public foods: Food[];// Food[] (or Array<Food>) identifies tasks as an array of Task objects. Notice below that tasks is an array of new Task objects. Refer to tasks with this.
  constructor(){
      this.foods = [
        // new Food('Thai', 'I ate all of it', 400, 0)
      ];
  }
}
