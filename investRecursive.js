// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)


var invest = function(investment, interest, years){
  if(years === 0) {
    return investment;
  }
  investment = ( ( investment*(interest/100) ) + investment);
  return invest(investment, interest, years-1);
};

console.log( invest(1000, 10, 1) );
console.log( invest(1000, 10, 2) );
console.log( invest(1000, 10, 3) );