// A teacher needs your help grading her class of students. Given a report of all student grades, return both the class average and the average of each student.
// NOTE: Round any calculations to the nearest 2 decimal places.

// Input 
// "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18" 
// Output
// { "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }

function average(arr) {
  var count = arr.length-1;
  var sum = 0;
  var average = 0;

  for(var i=1; i<arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  count = arr.length-1;
  average = Math.round((sum/count)  * 100)  / 100 ;
  return average;
}


function autograde (report) {
  var reportArr = report.split("\n");
  var resultObject = {"all" : 0};
  var allsum = 0;
  var allaverage = 0;

  for(var i=0; i<reportArr.length; i++) {
    var nameArr = reportArr[i].split(" ");
    resultObject[nameArr[0]] = average(nameArr);
  }

  for(var key in resultObject) {
    allsum += resultObject[key];
  }
  allaverage = allsum/reportArr.length;
  resultObject['all'] = Math.round(allaverage * 100) / 100;
  return resultObject;

}
