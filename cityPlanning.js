/*
gonna sort items into bins! function needs to both take an item, then know which bin to throw it in.
trash will say what the type is
bins tally how much  trash in each
function returns bin tally.
*/

const smartGarbage = function (trash, bins){
  if(trash === 'waste'){
    bins.waste += 1;
  }
  else if(trash === 'recycling'){
    bins.recycling += 1;
  }
  else if(trash === 'compost'){
    bins.compost += 1;
  }
  return bins;
}

console.log(smartGarbage('recycling', {waste: 0, recycling:0, compost: 0}))