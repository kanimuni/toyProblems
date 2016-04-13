// Given an array of negative/positive integers, return true if there exists two numbers 
// whose sum is zero.

// Examples
// Input            Output
// [ 1, 3, 2, -3 ]  true
// [ 5, 7, 2, 9 ]   false

function zeroSum (numbers) {
 var result = false;
 for(var i=0; i<numbers.length; i++) {
   var lookfor = (numbers[i]) * (-1);
   if(numbers[i] !== 0 && numbers.includes(lookfor)) {
    result = true;
    return result;
   } else {
    var newarr = numbers.slice();
    newarr.splice(i, 1);
    if(numbers[i] === 0 && newarr.includes(0)) {
      result = true;
      return result;
    }
   }
 }
 return result;
}

zeroSum([1,2,3]);