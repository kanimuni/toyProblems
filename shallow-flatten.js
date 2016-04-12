// Given an array of arrays, return all elements in a single array. 
// Nested arrays will be at most one level deep, meaning 
// [1, [2, 3], 4, [5], 6] and not [[[1],[2], [3]]]

// Input                                                 Output
// [ [ 10 ], [ 20, 30 ], [ 40 ] ]                   [ 10, 20, 30, 40 ]
// [ [ 1, 1 ], [ 4 ], 3, [ 3 ], 4, [ 6, 7 ] ]       [ 1, 1, 4, 3, 3, 4, 6, 7 ]

function flatten (array) {
  return array.reduce(function(accumulator, item) {
    if(Array.isArray(item)) {
      accumulator = accumulator.concat(item);
    } else {
      accumulator.push(item);
    }
    return accumulator;
  }, []);
}

console.log(flatten([ [ 1, 1 ], [ 4 ], 3, [ 3 ], 4, [ 6, 7 ] ] ));
