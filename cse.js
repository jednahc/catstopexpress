// document.getElementById("diceButton").addEventListener(click, rollDice);

// function to roll dice
function rollDice() {
  let diceNum = [];
  for(let i = 0; i < 5; i++){
  diceNum.push(Math.floor(Math.random() * 6) + 1);
  }
// diceDisplay(diceNum);
return diceNum;
}
console.log(rollDice());
// const diceDisplay = (diceNum) => {
//     const diceDiv = document.getElementById("diceDisplay");
//     diceDiv.innerHTML = ''

//     diceNum.forEach((die, dieIdx) => {
//        const dieButton =  document.createElement('button');
//        dieButton.textContent = `Dice ${dieIdx + 1}: ${die}`;

//        dieButton.addEventListener('click', () => )
//     })
// }
