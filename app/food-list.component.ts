import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent],
  template: `
    <food-display *ngFor="#currentFood of foodList"
      (click)="foodWasClicked(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>
  `
  //[class.selected]="currentTask === selectedTask" tells Angular to either add or remove the class selected based on whether or not the condition to the right of the equals sign is true: currentTask === selectedTask

  //[food]="currentFood" sets the task input equal to the local variable currentTask as we instantiate the <task-display> tags with our for each loop
})

export class FoodListComponent {
  public foodList: Food[]; //setting foodList propety to expect a Food array. We will send this to the app component, where we will set it equal to the foods property, which is also an array of Food objects.
  public onFoodSelect: EventEmitter<Food>; //create a property to hold the Event Emitter object FoodListComponent output
  public selectedFood: Food;
  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodWasClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}
