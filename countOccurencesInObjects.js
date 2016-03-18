// count the occurences of a value in a nested object
var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};	//same for nested object

var countOccurencesInNestedObjec = function(object, target) {
	var result = 0;

  var innerFunction = function(obj, value) {
    for(var key in obj) {
    	if(Object.prototype.toString.call(obj[key]) === "[object Object]") {
    		innerFunction(obj[key], value);
    	} else {
    		if(obj[key] === value) {
    			result++;
    		}
    	}
    }
  };

  innerFunction(object, target);
  return result;
};


console.log( countOccurencesInNestedObjec(testobj, "r") );


















// var countKeysInObj = function(obj, prop) {
// 	var result = 0;
	
// 	var inner = function(obj) {
// 		for (var key in obj) {
// 			if ( key === prop && (Object.prototype.toString.call(obj[key]) === "[object Object]") ) {
// 				result++;
// 				inner(obj[key]);
// 			} else if ( key === prop) {
// 				result++;
// 			} else if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
// 				inner(obj[key]);
// 			}
// 		}
// 	};
// 	inner(obj);
// 	return result;
// };