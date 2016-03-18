/*Count the occurences of an element inside a list.
[2,7,4,4,1,4], 4
Returns 3*/

var testarr = [ 2,7,[4,4],1,[ 1,[ 4, [4,1] ] ]  ];

//var testarr = [4,[4,4],4];

var countOccurence = function(array, target) {
  var result = 0;
  debugger;
  var innerFunction = function(arr, tgt) {
    for(var i=0; i < array.length; i++) {
	    if( Array.isArray(arr[i]) ) {
	    	innerFunction(arr[i], tgt);
	    } else {
	    	if(arr[i] === tgt) {
	    		result += 1;
	    	}
	    }
    }
  };

  innerFunction(array, target);
  return result;
};


console.log ( countOccurence(testarr, 4) );