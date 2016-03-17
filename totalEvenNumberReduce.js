// total of all the the even number in an array of numbers using reduce
var testArray = [1,2,3,4,5,6,7,8,9,0];

var totalEvenReduce = function(array) {
	return array.reduce(function(accumulator, item) {
    if(item % 2 === 0) {
      return accumulator += item;
    } else {
      return accumulator;
    }
	}, 0);
};

//console.log(totalEvenReduce(testArray));