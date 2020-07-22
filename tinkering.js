///learning the for...of loop

let data = ['cow','chicken','dog','deepcrow'];
let name = ['Keagan','Xanthadar','Mary']


for( let x of name){
  let y = Math.floor(Math.random() * data.length);
  console.log(x + " the "+ data[y] +".");
}
