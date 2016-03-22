// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
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


console.log(4)
rec(5,10)
console.log(5)*
console.log(5)
rec(6,10)
console.log(6)*
console.log(6)
rec(7,10)
console.log(7)*
console.log(7)
rec(8,10)
console.log(8)*
consle.log(8)
rec(9,10)
console.log(9)*
console.log(9)
rec(10,10)
console.log(10)
