//14.Augument every element in a list with a new value. The elemts are lists themselves. 
//[[],[3],[7]] , 5 Returns [[5],[3,5],[7,5]]
//with loop
//with recursion

var arr = [[],[3],[7]];

var augmentArray = function(array, augment, i) {

  i = i || 0;
  //base case
	if(i === array.length-1) {
		//debugger;
		return array;
	}
  
  //Do
  array[i].push(augment);
	
	//recurse
	return augmentArray(array, augment, i+1);
	
};

console.log(augmentArray(arr, 5));
