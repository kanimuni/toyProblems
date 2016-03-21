// write a funtion that rerutns the permutations of a "n" times dice roll.
// rollDice(0) //returns []
// rollDice(1) //[[1], [2], [3], [4], [5], [6]]
// rollDice(2) //[[1, 1], [1, 2], [1, 3], [1, 4] ... [6, 6]]

var rollDice = function(numberOfRounds, i, memarr) {
  i = i||1;
  memarr = memarr || [[]];
  var result = [];
  
  if(numberOfRounds === 0) {
    return result;
  }

  for(var j=0; j<memarr.length; j++) {
     result.push( memarr[j].concat(["1"]) );
     result.push( memarr[j].concat(["2"]) );
     result.push( memarr[j].concat(["3"]) );
     result.push( memarr[j].concat(["4"]) );
     result.push( memarr[j].concat(["5"]) );
     result.push( memarr[j].concat(["6"]) );
   }

  if(i === numberOfRounds) {
    return result;
  } else {
    return rollDice(numberOfRounds, i+1, result);
  }
};



console.log("Number of possible permutations : " + rollDice(2).length);
console.log( rollDice(2) );

