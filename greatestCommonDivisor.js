// 2. Find the greatest common divisor (gcd) of two positive numbers.
// The GCD of two integers x and y is the greatest integer that divides
// both x and y with no remainder.
// Example:  gcd(4,36);  // 4


// facts
// inputs 2 numbers
// output one number which is the GCD


var findGCD = function(num1, num2) {
  var result = 0;

  var innerFunction = function(a,b) {
  //base case
  //bigger number divisble by smaller number
    var smaller = a < b ? a : b;
    var bigger = a < b ? b : a;
    if (bigger % smaller === 0) {
      result = smaller;
    } else {
      innerFunction(a-1, b);
    }
  };

  innerFunction(num1, num2);
  return result;
};

console.log("GCD for 4 & 16 is " + findGCD(4,16) );

console.log("GCD for 354 & 12345 is " + findGCD(354, 12345) );






















// var gcd = function(x, y) {

//   var dividend = Math.max(x, y);
//   var divisor = Math.min(x, y);
//   var remainder = dividend % divisor;

//   // Base case
//   if (remainder === 0) {
//     return divisor;
//   }

//   // Recursive case
//   return gcd(divisor, remainder);
// };