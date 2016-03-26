import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="food-form">
      <h6>Enter a new food you had today:</h6>
      <input placeholder="Enter name of food" class="col-sm-8 input-sm" #newName>
      <input placeholder="Enter details about the food" class="col-sm-8 input-sm" #newDetails>
      <input placeholder="Enter the food's calories" class="col-sm-8 input-sm" #newCalories>
      <button (click)="addFood(newName, newDetails, newCalories)" class="btn-info">Add</button>
    </div>
  `
  //use the # symbol in the <input> tag to create a new local variable to hold the value of that form element.
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(addedFood: HTMLInputElement, addedDetails: HTMLInputElement, addedCalories: HTMLInputElement){
    var newFood = new Food(addedFood.value, addedDetails.value, parseInt(addedCalories.value));
    this.onSubmitNewFood.emit(newFood);
    addedFood.value="";
    addedDetails.value="";
    addedCalories.value="";
  }
}
