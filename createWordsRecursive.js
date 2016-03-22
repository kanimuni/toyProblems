// Given a string how many random words can you make out of it?
// The words do not have to be real words 
// each letter can only be used once


var createWords = function(string) {
  var result = [];
  var letters = string.split("");
  var lettersLength = letters.length;

  var innerFunc = function(input, words) {
    if(input.length === 0) {
      result.push(words);
    } else {
      for(var i=0; i< input.length; i++) {
        tmp = input.slice();
        tmp.splice(i,1);
        innerFunc(tmp, words.concat(input[i]));
      }
    }
  };

  innerFunc(letters, []);
  return result;
};

console.log(createWords("muni"));