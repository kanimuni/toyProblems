//map and reduce toy problem.js
//given an array of peoples names return a single string consisting of the last letter of the alphabet in the names
//var exampleString = ['kani', 'muni', 'aki', 'hana', 'ichizuka']; //in this example the return string would be "nuknz"
//use map and reduce or if your feeling lucky just reduce.


//------------ Solution 1 using both map and recduce --------------------
var exampleArray = ['kani', 'muni', 'aki', 'hana', 'ichizuka'];

var test = function(array) {
	return array.map(function(value, key) {
		return value.split('').sort().pop();
	})
	.reduce(function(accumulator, item) {
		return accumulator + item;
	}, "");
};
//------------ Solution 1 using both map and recduce --------------------


//------------ Solution 2 using just recduce ----------------------------
var exampleArray = ['kani', 'muni', 'aki', 'hana', 'ichizuka'];

var test = function(array) {
	return array.reduce(function(accumulator, item) {
		return accumulator + item.split("").sort().pop();
	}, "" );
};
//------------ Solution 2 using just recduce ----------------------------



