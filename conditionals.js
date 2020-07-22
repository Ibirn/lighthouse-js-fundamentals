const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!")
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


//
const temperature = -1;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
}

else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
}

else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


////

const isCitizen = true;
const age = 26;

if (isCitizen && age >18) {
  console.log("You are eligible to vote!");
}


///

if (temperature < -40 || temperature > 40){
  console.log("maybe going outside isn't such a great idea...");
}

////This one is confusing, I'll never 100% remember how messy ! operator gets. If '!raining' is true (which it isn't) leave the umbrella? But it's raining!

if(!raining) {
  console.log("Leave your umbrella-ella-ella at home!")
}