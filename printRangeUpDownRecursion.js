// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 5);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4

var printRangeUpDown = function(min, max){
  debugger;
  if (min === max) {
    console.log(min);
    return;
  }

  console.log(min);
  printRangeUpDown(min + 1, max);
  console.log(min);
};

printRangeUpDown(4, 10);