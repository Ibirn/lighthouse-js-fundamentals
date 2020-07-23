//3 is loopy
//4 is lighthouse

for(let i = 100; i <= 200; i++){
  if (i % 3 === 0){
    if (i % 4 === 0){
      console.log("LoopyLighthouse")
    }
    else {
      console.log("Loopy")
    }
  }
  else if(i % 4 === 0){
    console.log("Lighthouse");
  }
  else {
    console.log(i);
  }
}