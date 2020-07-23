/*
judging tomatos on redness || plumpness.
Man, remember before tomatoes got all weird and watery? You could eat 'em like apples. Good times.

judgeVegg gets two inputs: a list of submitted veggie objects (array) and characteristic to judge.

Then it needs to return the name of whoever submitted the best veggie with the input characteristic.

*/
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric){
  let highest = 0;
  let winner = '';
  let score = 0;

  for(let i = 0; i < vegetables.length; i++){
  if (vegetables[i].hasOwnProperty(metric)){
    score = vegetables[i][metric]
    
    if (score > highest){
      highest = score;
      winner = vegetables[i].submitter;

    }
    
  }
  
}
return winner
}
console.log(judgeVegetable(vegetables,'redness'))