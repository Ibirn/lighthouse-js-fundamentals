/*
it's about spaaaaace
send containers containing 100 bottles. anything other than multiples of 100 won't be sent. given x amount of bottles, how many containers are sent?

*/

const howManyHundreds = function(bottles){
  let x = bottles % 100;
  bottles -= x;
  return bottles / 100;
}

console.log(howManyHundreds(343));