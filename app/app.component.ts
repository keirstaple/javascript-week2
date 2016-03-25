import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Food Log</h1>
      <food-list></food-list>
  `
})

export class AppComponent {
  public foods: Food[];// Food[] (or Array<Food>) identifies tasks as an array of Task objects. Notice below that tasks is an array of new Task objects. Refer to tasks with this.
}
