// Given a number, return true if the number is a power of 2. Otherwise, return false.

// Examples
// Input  Output
// 16     true
// 1      true
// 5      false
// 0      false

function powerOfTwo (number) {
  if(number === 0) {
    return false;
  }
  if(number === 1) {
    return true;
  }
  if(number === 2) {
    return true;
  }
  if(number % 2 !== 0) {
    return false;
  }
  return powerOfTwo(number/2);
}

console.log(powerOfTwo(30));

