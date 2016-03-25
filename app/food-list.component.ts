import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodComponent } from './edit-food.component';


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodComponent],
  template: `
    <food-display *ngFor="#currentFood of foodList"
      (click)="foodWasClicked(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>
    <edit-food *ngIf="selectedFood" [food]="selectedFood">
    </edit-food>
  `
  //[class.selected]="currentTask === selectedTask" tells Angular to either add or remove the class selected based on whether or not the condition to the right of the equals sign is true: currentTask === selectedTask

  //[food]="currentFood" sets the task input equal to the local variable currentTask as we instantiate the <task-display> tags with our for each loop

  //When a food is clicked, we use the (click) emitter to call our foodClicked method. This sets the FoodListComponent's property selectedFood equal to the task that we want to edit. Therefore, we can just pass this property value into the EditFoodComponent.

  //Use *ngIf as an attribute on an HTML tag. Set it to an expression in double quotes, and if the expression evaluates to true (or at least to not false), then the HTML tag (and any other nested tags) are shown. If the expression evaluates to false or undefined, then the HTML tag is hidden.
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
