//12.Reduce series of 0s to a single 0. [2,0,0,0,1,4] Returns [2,0,1,4]
//with loop
//recursion
var arr = [2,0,0,0,0,0,0,1,4];

var reduceZeros = function(array) {
	var newArray = [];
	
	var innerFunc = function(array) {
		for (var i = array.length-1; i >=0; i--) {
			if (array[i] === 0 && array[i-1] === 0) {
				continue;
			} else {
				newArray.push(array[i]);
			}
		}
	};
	
	innerFunc(array);
	return newArray.reverse();
};

console.log(reduceZeros(arr));

//-------------------------------------------------------------

var reduceZeros2 = function(array) {
	var newArray = [];
	
	var innerFunc = function(array) {
		for (var i=0; i < array.length; i++) {
			if (array[i] !== 0) {
				newArray.push(array[i]);
			} else {
				if(array[i+1] !== 0) {
					newArray.push(array[i]);
				}
			}
		}
	};
	
	innerFunc(array);
	return newArray;
};

// ------------------------------------------

var reduceZeros3 = function(array, i, resultArray) {
  i = i||0;
  resultArray = resultArray||[];

  if(i === array.length) {
    return resultArray;
  }

  if(array[i] === 0) {
    if(array[i+1] === 0) {
      //do nothing
    } else {
      resultArray.push(array[i]);
    }
	} else {
		resultArray.push(array[i]);
	}

	return reduceZeros(array, i+1, resultArray);
};

// console.log(reduceZeros3([1,0,0,2,0,3,0,0]));
// ------------------------------------------


console.log(reduceZeros2(arr));


var reduceZreduce = function(array) {
  return array.reduce(function(accumulator, item, key) {
    if(item !== 0) {
      accumulator.push(item);
    } else {
      if(array[key+1] !== 0) {
        accumulator.push(item);
      }
    }
    return accumulator;
  }, []);
};