function truncate(str, num) {
  
  // checks to see if the num is equal to or
  // greater than the str.length
  if (num >= str.length) {
    return str;
  }
  
  // holds the substring
  var substr = str.slice(0, num);
    
  // if substr is 3 chars or less, just add
  // the dots to the end of
  if (substr.length <= 3) {
    substr += "...";
  } else {
    substr = substr.slice(0, -3);
    substr += "...";
  }
  
  return substr;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
