// Write a function that generates every sequence of throws a single
// player could throw over a three-round game of rock-paper-scissors.
// 
// Your output should look something like:
// [["rock", "rock", "rock"], ["rock", "rock", "paper"], ["rock", "rock", "scissors"], ["rock", "paper", "rock"]
// ...etc...]
// 
// Extra credit:
// - Make your function return answers for any number of rounds.
// Example:
// rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]

// var rockPaperScissor = function(rounds, i, memarr) {
  
//   //create counter to keep count of rounds to hit base case
//   //make it 1 if none provided
//   i = i||1;

//   //create start empty array to be populated
//   memarr = memarr || [[]];
  
//   //decalare variable to hold result
//   var result = [];
  
//   //if no rounds is given 
//     // yes: return an empty array
//   if(rounds === 0) {
//     return result;
//   }
//     //no: continue

//   //create perumutation for a one time throw (rounds =1)
//    for(var j=0; j<memarr.length; j++) {
//       result.push( memarr[j].concat(["rock"]) );
//       result.push( memarr[j].concat(["paper"]) );
//       result.push( memarr[j].concat(["scissors"]) );
//     }
  
//   //if rounds is one
//   if(i === rounds) {
//     //yes: return result
//     return result;
//     //else: recurse for next round with result for previous and an incremented i
//   } else {
//     return rockPaperScissor(rounds, i+1, result);
//   }

// };

// console.log( rockPaperScissor(1) );







var rps = function(rounds) {
  var result = [];
  var options = ['rock', 'paper','scissors'];
  
  var innerFunction = function(permutations, roundsRemaining) {
    if(rounds === roundsRemaining) {
      return result.push(permutations);
    } else {
      for(var i=0; i<options.length; i++) {
        innerFunction(permutations.concat(options[i]), roundsRemaining+1);
      }
    }
  };

  innerFunction([], 0);
  return result;
};

console.log(rps(0));
console.log(rps(1));
console.log(rps(2));
console.log(rps(3));