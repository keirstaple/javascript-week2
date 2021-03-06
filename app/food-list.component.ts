import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { DisplayDetailsCaloriesComponent } from './display-details-calories.component';
import { HealthyPipe } from './healthy.pipe';


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodComponent, NewFoodComponent, DisplayDetailsCaloriesComponent],
  pipes: [HealthyPipe],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="healthy">Show Healthy</option>
      <option value="unhealthy">Show Unhealthy</option>
    </select>

    <food-display *ngFor="#currentFood of foodList | healthy: filterHealthy"
      (click)="foodWasClicked(currentFood)"
      [food]="currentFood">
    </food-display>

    <display-details-calories *ngIf="selectedFood" [food]="selectedFood"></display-details-calories>

    <div class="bothForms">
      <edit-food *ngIf="selectedFood" [food]="selectedFood"></edit-food>

      <new-food (onSubmitNewFood)="createFoodEntry($event)"></new-food>
    </div>
  `

  //Connect the (change) event using parenthesis for output to a method called onChange. Pass it the selected value from the menu by using the argument $event.target.value.

  //[food]="currentFood" sets the food input equal to the local variable currentFood as we instantiate the <food-display> tags with our for each loop

  //When a food is clicked, we use the (click) emitter to call our foodClicked method. This sets the FoodListComponent's property selectedFood equal to the food that we want to edit. Therefore, we can just pass this property value into the EditFoodComponent.

  //Use *ngIf as an attribute on an HTML tag. Set it to an expression in double quotes, and if the expression evaluates to true (or at least to not false), then the HTML tag (and any other nested tags) are shown. If the expression evaluates to false or undefined, then the HTML tag is hidden.
})

export class FoodListComponent {
  public foodList: Food[]; //setting foodList property to expect a Food array. We will send this to the app component, where we will set it equal to the foods property, which is also an array of Food objects.
  public onFoodSelect: EventEmitter<Food>; //create a property to hold the Event Emitter object FoodListComponent output
  public selectedFood: Food;
  public filterHealthy: string = "all";
  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodWasClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFoodEntry(newFood: Food): void {
    this.foodList.push(newFood);
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}
