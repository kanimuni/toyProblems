// Take the elements in an array and create all possible 
// combinations out of those elements

function arrayCombination(array) {
  var result = [];
  
  var innerFunction = function(combination, arr) {
    for (var i = 0; i < arr.length; i++) {
      result.push(combination.concat(arr[i]));
      innerFunction(combination.concat(arr[i]), arr.slice(i + 1));
    }
  };
  
  innerFunction([], array);
  return result;
}