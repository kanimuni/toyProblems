// Create a function that takes two arrays and determine whether the second array is a subset of the first array. 
// Arrays will only contain primitive values.

// Examples
// Input              Output
// array:
// [ 1, 2, 3, 4 ]
// sub:
// [ 2, 3, 4 ]        true

// array:
// [ 2, 2, 2, 3, 4 ]
// sub:
// [ 2, 4, 3 ]        true

// array:
// [ 2, 3, 3, "a" ]
// sub:
// [ 3, 3, 3, "a" ]  false

function isSubset (array, sub) {
  var result = false;
  if(sub.length === 0) {
    return true;
  }
  
  for(var i=0; i<sub.length; i++){
    if(array.includes(sub[i])) {
      array.splice(array.indexOf(sub[i]), 1);
      result = true;
    } else {
      return false;
    }
  }
  return result;
}


var arraySetReduce = function(array, sub) {
  return sub.reduce(function(accumulator, item) {
     if(accumulator && array.includes(item)) {
       var index = array.indexOf(item);
       array.splice(index, 1);
       accumulator = true;
     } else {
       accumulator = false;
     }
    return accumulator;
   }, true);
};

console.log( arraySetReduce([ 2, 2, 2, 3, 4 ], [ 2, 4, 3]) );