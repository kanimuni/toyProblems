// given a dollar coin and two 50 cents coins figure out how 
// many ways you can make a dolloar

var howToAddUpTo = function(toValue) {
  var coins = [1, 0.50];
  var result = [];
  debugger;
  if(toValue === 0) {
    return 0;
  }

  var innerFunction = function(input, permutations) {
    if(input.length === 0) {
      result.push(permutations);
    } else {
      for(var i=0; i<input.length; i++) {
        temp = input.slice();
        temp.splice(i,1);
        innerFunction( temp, permutations.concat(input[i]) );
      }
    }
  };

  innerFunction(coins, []);
  //return add(result, toValue);
  return result;
};

// --------------------------------
console.log(howToAddUpTo(1));


var add = function(arr, value) {
 var total = 0;
 var count = 0;
 for(var i=0; i<arr.length; i++) {
    count = 0;
    for(var j=0; j<arr[i].length; j++) {
      count += arr[i][j];
      if(count === value) {
        total++;
      }
    }
  }
  return total;
};

// var testarr = [ [1], [0.5, 0.5], [0.25, 0.25, 0.5], [0.25, 0.25, 0.25, 0.25], [0.25, 0.5] ];
// console.log(add(testarr, 1));
