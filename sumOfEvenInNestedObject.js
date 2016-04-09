//myNestedObj = { a: 5, b: 10, c: { d: 12, e: { f: 13, g: 17, h: { i:20, j:22 } } } };
//Take a nested object and return the sum of all the even numbers of that object.
//The object will only contain values that are objects or numbers.
//loop
//recusrive with inner



myNestedObj = { a: 5, b: 10, c: { d: 12, e: { f: 13, g: 17, h: { i:20, j:22 } } } };


var sumOfEvenInNestedObject = function(object) {
  var result = 0;

  var innerFunction = function(obj) {
  	for (var key in obj) {
  		if(Object.prototype.toString.call(obj[key]) === "[object Object]") {
  			innerFunction(obj[key]);
  		} else {
  			if(obj[key] % 2 === 0) {
  				result += obj[key];
  			}
  		}
  	}
  };

  innerFunction(object);
  return result;
};

console.log( sumOfEvenInNestedObject(myNestedObj) );

// No innerfunction (post it note method)

var nestedObjectSum = function(obj) {
  var sum = 0;
  for(var key in obj) {
    if(Object.prototype.toString.call(obj[key]) === "[object Object]") {
      sum += nestedObjectSum(obj[key]);
    } else {
      if(obj[key] % 2 === 0) {
        sum += obj[key];  
      }
    }
  }
  return sum;
};
