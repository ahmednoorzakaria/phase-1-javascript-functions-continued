// code your solution here
function saturdayFun(roll = 'roller-skate') {
    return (`This Saturday, I want to ${roll}!`);
  }
console.log(saturdayFun(`bathe my dog`))
console.log(saturdayFun())

function mondayWork(work = 'go to the office') {
  return`This Monday, I will ${work}.`;
}
console.log(mondayWork(` work from home.`))
console.log(mondayWork())

function wrapAdjective(symbol = "*") {
  return function(adjective = "a hard worker") {
    return `You are ${symbol}${adjective}${symbol}!`;
  };
}

console.log(wrapAdjective('||')('a dedicated programmer'));
console.log(wrapAdjective()());
