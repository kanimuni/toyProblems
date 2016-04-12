// Given a string of only lowercase alphabet characters, find the character that occurs 
// the highest number of times. If any characters tie, return them all in alphabetical order.

// Examples
// Input              Output
// "abcdc"          "c"
// "occurring"     "cr"
// "xxyyzz"         "xyz"


function highestFreq (str) {
  var result = "";
  var maxrepeat = 0;
  var strarr = str.split("");
  var statistics = strarr.reduce(function(accumulator, item) {
    if(accumulator[item]) {
      accumulator[item]++;
    } else {
      accumulator[item] = 1;
    }
    return accumulator;
  },  {});

  for(var key in statistics) {
    if(statistics[key] > maxrepeat) {
      maxrepeat = statistics[key];
    }
  }
  
  for(var key in statistics) {
    if(statistics[key] === maxrepeat) {
      result += key;
    }
  }

  return result.split("").sort().join("");
}

console.log( highestFreq("occurring") );