// Given a number n (represented as a binary number string), convert n to base 10. 
// Do NOT use parseInt(n, 2). You may use the parseInt function that takes in just one argument.

function binaryToDecimal (n, sum) {
  sum = sum || 0;

  if(n.length === 1) {
    if(parseInt(n) === 0) {
      return sum;
    } else {
      return sum + 1;
    }
  }

  sum += Math.pow(2, n.length-1) * parseInt(n[0]);

  return binaryToDecimal(n.slice(1), sum)
}

console.log(binaryToDecimal("1000"));


