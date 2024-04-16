
//* functions
function rollDice() {
  let diceNum = [];
  for(let i = 0; i < 5; i++){
  diceNum.push(Math.floor(Math.random() * 6) + 1);
  }
return diceNum;
}
console.log(rollDice());

