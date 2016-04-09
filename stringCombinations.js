// Take a string and create all possible combinations of letters in that string.



function getCombinations(string) {
  var result = [];
  
  var innerFunction = function(prefix, string) {
    for (var i = 0; i < string.length; i++) {
      result.push(prefix + string[i]);
      innerFunction(prefix + string[i], string.slice(i + 1));
    }
  };
  
  innerFunction("", string);
  return result;
}

console.log(getCombinations("abc"));