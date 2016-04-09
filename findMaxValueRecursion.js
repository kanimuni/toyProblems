//**************************************************************************
//find the max value in the list [2,7,8,3,1,4]
//first with loop

var arr1 = [2,7,8,3,1,4];
var arr2 = [[1,2],[3],[4,5,[6,7,[8,[9,10],3,2],1,0],13,14],1];

var findMaxValueRecursion = function(array) {
	var result  = -Infinity;

	var innerfunction = function(arr) {
    for (var i=0; i<arr.length; i++) {
      if(Array.isArray(arr[i])) {
        innerfunction(arr[i]);
      } else {
    	  if(result < arr[i]) {
    		  result = arr[i];
    	  } else {
    		  result = result;
    	  }
      }
    }
	};

  innerfunction(array);
	return result;
};

//console.log( findMaxValueRecursion(arr1) );
//console.log( findMaxValueRecursion(arr2) );



var arr = [2,7,8,3,1,4];      // input array

var maxvalue = function(array) {  // function using while
  var m = -Infinity;
  var i = (array.length)-1;
  while (i >= 0) {
    if (array[i] > m) {
      m = array[i];
      i--;
    } else {
      i--;
      continue;
    }
  }
  return m;
  };


// -------------------------

var maxvalueReduce = function(array) {
  return array.reduce(function(accumulator, item) {
    if(item > accumulator) {
      accumulator = item;
    }
    return accumulator;
  }, 0);
};

console.log( maxvalueReduce(arr) );

