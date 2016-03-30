
import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "healthy",
  pure: false
  //Declaring a pipe to be stateful (false) tells Angular to check and see if the output of the pipe has changed after each change detection cycle, this causes it to update as soon as we have changed something about a task.
})

export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args) {
  //args is the traditional name for a function parameter that includes multiple pieces of information like this. Generally, in our variable names we want to avoid abbreviations, but this one is so widely used that it has become kind of a standard.
    var isHealthy = args[0];
    if (isHealthy === "healthy") {
      return input.filter((food) => {
        return food.calories <= 300;
      });
    } else if (isHealthy === "unhealthy") {
      return input.filter((food) => {
        return food.calories > 300;
      });
    } else {
      return input;
    }
  }
}
