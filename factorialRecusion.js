// calculate the factorial of a number using both while loop and recursion

var factorialWhile = function(n) {
	var result = n;
	while (n > 0) {
    result = result * (n-1);
    n--;
	}
	return result;
};

var factorialRecursion = function(n) {
	if(n < 0) {
		console.log("n needs to be a positive number");
		return;
	} else if(n === 0) {
		return 1;
	}

	return n * factorialRecursion(n-1);
};









//   var result = n;
//   while (n > 1) {
//     result = result * (n-1);
//     n--;
//   }
//   return result;
// };

// var recursiveFactorial = function(n) {
// 	if (n < 0) {
// 		return console.log("Must be a positive integer.");
// 	} else if (n === 0) {
// 		return 1;
// 	}
// 	return n * recursiveFactorial(n - 1);
// };