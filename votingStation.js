/*
each station has three arrays of capacity, a name, and a type. nested arrays?
To be approved Capacity must be >= 20 and type must be school || community center.
push the qualified locations to new array goodStations
*/
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
  let goodStations = [];

  for(let i of stations){
    let capacity = i[1];
    let type = i[2];

    if(capacity >= 20 && (type === 'school' || type === 'community centre')){
      goodStations.push(i[0]);
    }
  }
  return goodStations;

}

chooseStations(stations);