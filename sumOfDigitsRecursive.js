// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

var sumDigits = function(number, i, sum) {
  i = i||0;
  sum = sum||0;

  if(i === (number.toString()).length) {
    return sum;
  }

  sum += Number((number.toString())[i]);

  return sumDigits(number, i+1, sum);

};

console.log (sumDigits(126) );
console.log (sumDigits(49) );
console.log (sumDigits(12) );