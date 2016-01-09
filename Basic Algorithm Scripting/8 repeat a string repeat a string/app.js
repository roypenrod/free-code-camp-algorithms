function repeat(str, num) {
  var repeatedString = '';
  
  // if num is negative, return empty string
  if (num < 0) {    
    return repeatedString;
  }
  
  // create the repeated string
  for (var i = 0; i < num; i++) {
    repeatedString += str;
  }
  
  return repeatedString;
}

repeat("abc", 3);
