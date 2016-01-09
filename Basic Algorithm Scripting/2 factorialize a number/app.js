function factorialize(num) {
  
  // store the first number to muliply
  var answer = num;
  
  // get the next number to multiply it with
  num--;
  
  // cycle through the numbers
  while (num > 0) {
    
    // multiply the total with the current number
    answer = answer * num;   
    
    // get the next lower number
    num--;
  }
  
  if (answer === 0) {
    // if 0, return 1
    return 1;
  } else {
    // if not 0, return the factorial
    return answer;
  }
}

factorialize(5);
