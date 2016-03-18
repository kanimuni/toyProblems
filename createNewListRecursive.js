//Create a new list with a given value and length. 0, 5 Returns [0,0,0,0,0] 7, 3 Returns [7,7,7]*/
//loop
//inner

var createNewList = function(value, repeat, i, newArray) {
  
  i = i||0;
  newArray = newArray||[];

  if(i === repeat) {
    return newArray;
  }

  newArray.push(value);

  return createNewList(value, repeat, i+1, newArray);

};

console.log( "create five 0's :" + "[" + createNewList(0,5) + "]" );
console.log( "create seven 3's :" + "[" + createNewList(7,3) + "]" );
