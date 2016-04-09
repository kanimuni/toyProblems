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

console.log(totalEvenReduce(testArray));
// ---------------------------------------------

var totalEvenRecursion = function(array, total) {
  total = total || 0;
  if(array.length === 0) {
    return total;
  }
  if(array[0] % 2 === 0) {
    total += array[0];
  }

  return totalEvenRecursion(array.slice(1), total);

};
console.log( totalEvenRecursion(testArray) );