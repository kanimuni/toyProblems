// For example, if you wanted to climb 4 steps, you can take the following distinct number of steps:

// 1) 1, 1, 1, 1
// 2) 1, 1, 2
// 3) 1, 2, 1
// 4) 2, 1, 1
// 5) 2, 2

// So there are 5 distinct ways to climb 4 steps. 
// We want to write a function, using recursion, that will produce the answer for any number of steps. 
// You are only allowed to take one step or 2 steps at a time 

var climbSteps = function(numberOfSteps, steps) {
  
  steps = steps || 3;
  var result = 0;

  if(numberOfSteps === 0) {
  	return 0;
  }

	if(numberOfSteps === 1) {
		return 1;
	}

  if(numberOfSteps === 2) {
    return 2;
  }

  if(numberOfSteps >= 3) {
  	return climbSteps(numberOfSteps-2) + climbSteps(numberOfSteps-1);
  }
  
};

console.log( climbSteps(0) );
console.log( climbSteps(1) );
console.log( climbSteps(2) );
console.log( climbSteps(3) );
console.log( climbSteps(4) );
console.log( climbSteps(5) );
console.log( climbSteps(6) );

