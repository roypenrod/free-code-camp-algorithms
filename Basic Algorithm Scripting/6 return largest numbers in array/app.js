function largestOfFour(arr) {
  // holds the largest number found in each array
  var largestNumArr = [];
  
  // iterate through the array
  for(var i=0; i < arr.length; i++) {
   
    // assign the largest number in each array
    // to result
    var result = largestNumInArr(arr[i]);
    
    // push the result to the largest number array
    largestNumArr.push(result);
  }
  
  return largestNumArr;
}

function largestNumInArr(arr) {
  
  // holds the largest number found
  var largestNum = 0;
  
  // iterate through the array
  for(var i=0; i < arr.length; i++) {
    // if this is the largest number,
    // store it
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  
  // return the result
  return largestNum;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

