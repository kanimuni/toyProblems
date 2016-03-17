// check if a given number is an even number using recursion.

var isEven = function(n) {
	if (n < 0) {
		n *= -1;
	}
	if (n === 0) {
		return true;
	}
  if (n === 1) {
    return false;
  }
  return isEven(n-2);
};