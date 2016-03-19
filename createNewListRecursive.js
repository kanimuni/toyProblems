//Create a new list with a given value and length. 0, 5 Returns [0,0,0,0,0] 7, 3 Returns [7,7,7]*/
//loop
//inner

var createNewList = function(value, repeat, i, newArray) {
  
  i = i||0;
  newArray = newArray||[];

  if(i === repeat) {
    return newArray;
  }

  newArray.push(value);

  return createNewList(value, repeat, i+1, newArray);

};

// console.log( "create five 0's :" + "[" + createNewList(0,5) + "]" );
// console.log( "create seven 3's :" + "[" + createNewList(7,3) + "]" );


// Similiarly create the list for range of numbers
// So for the integers in range(2, 9); Output will be [3, 4, 5, 6, 7, 8]

var createRangeList = function(x, y) {
	var resultArray = [];
  var innerFunction = function(a,b) {
    if (a > b) {
    	return resultArray;
    }
    if(a === b) {
      return resultArray;
    }
    if(b-a === 1) {
      return resultArray;
    }
    resultArray.push(a+1);
    innerFunction(a+1, b);
  };
  innerFunction(x, y);
	return resultArray;
};

//console.log( createRangeList(0,101) );
 
var createRangeList2 = function(x, y, i, resultArray) {
  i=i||0;
  resultArray = resultArray || [];

  if(x === y) {
  	return [];
  }


  if(x > y) {
  	return [];
  }

  if(i === y-1) {
  	return resultArray;
  }

  resultArray.push(x+1);

  return createRangeList2(x+1, y, i+1, resultArray);

};

console.log( createRangeList2(1,0) );