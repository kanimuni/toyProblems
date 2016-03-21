// Given a string how many random words can you make out of it?
// The words do not have to be real words 
// each letter can only be used once


var createWords = function(string) {
  var result = [];
  var options = string.split("");
  var optionsLength = options.length;

  var innerFunc = function(input, words, turns) {
    if(turns === optionsLength) {
      result.push(words);
    } else {
      for(var i=0; i< input.length; i++) {
        tmp = input;
        tmp.splice(i,1);
        innerFunc(tmp, words.concat(input[i]), turns+1);
      }
    }
  };

  innerFunc(options, [], 0 );
  return result;
};

console.log(createWords("abc"));


// var createWords = function(string) {
//   var result = [];
//   var options = string.split("");

//   var innerFunc = function(words, turns) {
//     if(turns === options.length) {
//       result.push(words);
//     } else {
//       for(var i=0; i< options.length; i++) {
//       innerFunc(words.concat(options[i]), turns+1);
//       }
//     }
//   };

//   innerFunc([], 0 );
//   return result;
// };

// console.log(createWords("abc"));