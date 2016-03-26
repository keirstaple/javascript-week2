import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args) {
    var isHealthy = args[0];
    if (isHealthy === "healthy") {
      return input.filter((food) => {
        return food.calories < 301;
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
