// using recursion add the numbers inside a nested object

var traverseAndAdd = function(node) {
	var result = 0;
	var innersum = function(newnode) {
		for (var key in newnode) {
			if (typeof node[key] === 'number') {
				result += (newnode[key]);
			} else {
				innersum(newnode[key]);
			}
		}
	};
		innersum(node);
		return result;
};


	node = {
		value: 100,
		children1 : {value : 200},
		children2 : {value : 300, children3: {value: 400}}
	};

	traverseAndAdd(node);
