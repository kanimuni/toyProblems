// Given an array of negative/positive integers, return the element in the center position of the array.
// If the array has an even number of elements, return the average of the two middle elements instead.

// Examples
// Input               Output
// [ 200, 5, 100 ]     5

// [ 10, 20, 30, 40 ]  25


function middle (numbers) {
  var al = numbers.length;
  var middleIndex;
  if(al % 2 === 1) {
    middleIndex = Math.floor(al/2)
    return numbers[middleIndex];
  } else {
    middleIndex = Math.floor((al-1)/2);
    middleAverage =( (numbers[middleIndex] + numbers[middleIndex+1]) / 2 );
    return middleAverage;
  }
};
