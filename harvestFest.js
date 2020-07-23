/*
looking for a function, finalPosition() that takes moves as the argument. finalPosition(moves)

the parade starts at 0,0 and the function takes an array of cardinal directions then outputs the x,y location of the parade. can go negative.
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  should return

[-1, 4]

*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function (moves) {
  let newPosition = [0, 0];
  
  for (i of moves){

    if(i === 'north'){
      newPosition[1] += 1; 
    }
    else if(i === 'south'){
      newPosition[1] -= 1;
    }
    else if(i === 'east'){
      newPosition[0] += 1;
    }
    else if(i === 'west'){
      newPosition[0] -= 1;
    }
  }
  return newPosition;
}

console.log(finalPosition(moves));

