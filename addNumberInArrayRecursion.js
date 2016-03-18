/*Add up all numbers in the list. [2,7,8,3,1,4] Returns 25*/
//with a for loop

//recursion
var arr = [2,7,8,3,1,4];
var nestedarr = [[10, 10],[10],10, 10, 10, [10, 10, [10, [10, 10], 10], 10, 10], 10,10]; //total should be 160

var addAllNumbersRecursion = function(array) {
  var result = 0;

  var innerfunction = function(arr) {
    for(var i=0; i<arr.length; i++) {
      if(Array.isArray(arr[i])) {
        innerfunction(arr[i]);
      } else {
        result += arr[i];
      }
    }
  };

  innerfunction(array);
  return result;
};

console.log(addAllNumbersRecursion(arr));
console.log(addAllNumbersRecursion(nestedarr));

// --------------------------------------------------------------------
// using loop

var addAll = function(array) {
  var totalSum = 0;
  for (var i=0; i < array.length; i++) {
    totalSum += array[i];
  }
  return totalSum;
};

// --------------------------------------------------------------------


// Using recursion without innerfunction

var addAllWithoutInnerFunction = function(array, i, sum) {
  
  i = i||0;
  sum = sum||0;

  if(i === array.length) {
    return sum;
  }

  sum += array[i];

  return addAllWithoutInnerFunction(array, i+1, sum);
};

console.log( "without inner function and params " + addAllWithoutInnerFunction(arr, 0, 0) );

