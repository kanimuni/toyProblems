//Alternate the numbers sign regardless of their original sign. 
//Start with +; [2,7,8,3,1,4] Returns [2,-7,8,-3,1,-4]
//first with loop
//recursively

var testarray = [-2,-7,8,3,1,4];

var alternateSign = function(array) {
  var resultArray = [];

  var innerfunction = function(arr) {
    for(var i=0; i<arr.length; i++) {
    	if(i%2===0) {
    		if(arr[i]<0) {
    			resultArray.push(arr[i]*(-1));
    		} else {
    			resultArray.push(arr[i]);    			
    		}
    	} else {
        if(arr[i]<0) {
          resultArray.push(arr[i]);
        } else {
          resultArray.push(arr[i]*(-1));         
        }
      }
    }
  };


  innerfunction(array);
  return resultArray;
};

//console.log(alternateSign(testarray));


var arr = [2,7,8,3,1,4];

var alternateSign = function(array) {
  var newArray = [];
  var index = (array.length)-1;
  while (index >= 0) {
    if (index % 2 === 0) {
      newArray.push(array[index]);
      index--;
    } else {
      newArray.push(array[index]*-1);
      index--;
    }
  }
  return newArray.reverse();
};

var alternateSign = function(array, i) {
  if (i === array.length) {
    return console.log(array);
  } else {
    if (i % 2 === 0) {
      return alternateSign(array, i+1);
    } else {
      array[i] = array[i]*-1;
      return alternateSign(array, i+1);
    }
  }
};
