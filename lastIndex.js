//this is to detect the last known location of a value in an array. You want 4? 4 was last seen in index 3. Capiche?

let lastIndexOf = (array, value) => {
  let lastKnown = -1;

  for(i = 0; i < array.length; i++){

    if(array[i] === value){
      lastKnown = i;
    }
  }
  return lastKnown;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));