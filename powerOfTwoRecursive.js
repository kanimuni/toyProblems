// Check if a given number is a power of 2
// PowerOfTwo(8) -> true
// PowerOfTwo(9) -> false

var isPowerOfTwo = function(n){

// base case
// if the number is 1 
  // yes: return true
  if(n === 1) {
    return true;
  }
  // no: continue

// if the number is 2
  // yes: return true
  if(n === 2) {
    return true;
  }
  // no: continue


// if the number is even
  //yes: recurse
  if(n %2 === 0) {
    return isPowerOfTwo(n/2);
  } else {
  //no: return false
    return false;
  }
};


console.log("12 is " + isPowerOfTwo(12) );

console.log("1024 is " + isPowerOfTwo(1024) );

console.log("1026 is " + isPowerOfTwo(1026) );

console.log("1 is " + isPowerOfTwo(1) );

console.log("2 is " + isPowerOfTwo(2) );

console.log("-2 is " + isPowerOfTwo(-2) );


