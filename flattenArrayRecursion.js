//Given a list of lists of numbers, return a flat list of all numbers. 
//[[2,7], [8,3], [1,4]] Returns [2,7,8,3,1,4]*/
//for loop
//recursion

var arr = [ [1,2], [3,[4,5]], [6,[7,[8,9]],0] ];

var flatten = function(array) {
	var newFlatArray = [];

	var inner = function(array) {
		for (var i=0; i<array.length; i++) {
			if (Array.isArray(array[i])) {
				inner(array[i]);
			} else {
				newFlatArray.push(array[i]);
			}
		}
	};
	inner(array);
	return newFlatArray;
};

console.log( flatten(arr) );