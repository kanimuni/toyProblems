// Take a string and create all possible combinations 
// out of that string.



function getCombinations(chars) {
  var result = [];
  
  var innerFunction = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      innerFunction(prefix + chars[i], chars.slice(i + 1));
    }
  };
  
  innerFunction('', chars);
  return result;
}

console.log(getCombinations("abc"));