function reverseString(str) {
  
  // split the string into an array of characters
  var chars = str.split('');
  
  // reverse them
  chars.reverse();
  
  // join the chars array back into a string
  // and return it
  return chars.join('');  
}

reverseString("hello");