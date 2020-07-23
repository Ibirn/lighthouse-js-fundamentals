/*
monitoring number of cars and their speeds. so we'll need two variables, cars, speed. Oh, it says that in the thingy.

cars is gonna be an array where you store the time and speed of cars for review.
We're making an array of objects, essentially.

This seems too simple?????
*/



const carPassing = function (cars, speed) {
  cars.push({ time: Date.now(), speed: speed})
  return cars;

}

console.log(carPassing([],32));

