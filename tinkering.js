///learning the for...of loop
/*
let data = ['cow','chicken','dog','deepcrow'];
let name = ['Keagan','Xanthadar','Mary']


for( let x of name){
  let y = Math.floor(Math.random() * data.length);
  console.log(x + " the "+ data[y] +".");
}

function add(x,y) {
  var sum = x+y;
  return sum;
}

*/

/*getting func-y in here.
let has = "";

laugh = chuckle => {
  for(let i = 0; i < chuckle; i++){
    has = has + "ha";
  }
  return has + "!"
}

console.log(laugh(66));

//okay, so this was getting all fucky. You needed THREE, count 'em THREE variables: The number of 'ha's (chuckle), the iterator to compare how many 'ha's (i) and a variable STRING to keep the 'ha's in. The undefined error you kept throwing was because you forgot to include a return statement.
*/
/*
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

let tall = "";

buildTriangle = length => {
  for(i = 1; i <= length; i++){
    tall = tall + makeLine(i);
  }
  return tall
}
console.log(buildTriangle(5));
*/
/*
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(cost){
  cost *= 1.15;
  cost = cost.toFixed(2)
  cost = Number(cost)
  return cost;

})

console.log(totals);
*/
/*
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(row = 0; row < numbers.length; row++){
  for(column = 0; column < numbers[row].length; column++){
    if(numbers[row][column] % 2 === 0){
      numbers[row][column] = 'even';
    }
    else{
      numbers[row][column] = 'odd'
    }
  }
}

console.log(numbers)
*/
