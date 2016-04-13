longestImprovement.js

// Given an array, find the length of the longest increasing sequence.

// Examples
// Input                    Output
// [ 10 ]                   1
// [ 10, 20, 30, 10, 20 ]   3

function longestImprovement (numbers) {
  var count = 1;
  var resultarr = [];
  if(numbers.length === 1) {
    return 1;
  }
 
  for(var i=0; i<numbers.length; i++) {
    if(numbers[i+1] > numbers[i]) {
      count++;
    } else {
      resultarr.push(count);
      count = 1;
    }
  } 
  return resultarr.sort().reverse()[0];
}

console.log(longestImprovement([ 10, 20, 30, 10, 20 ]));