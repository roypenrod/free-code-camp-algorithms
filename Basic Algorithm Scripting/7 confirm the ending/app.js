function end(str, target) {
  
  // split the sentence into an array of words
  // on the space sepearator
  var arrWords = str.split(' ');
  
  // check to see if str is same length as
  // the first element of arrWords
  var singleWord;
  if ( str.length === arrWords[0].length ) {
    singleWord = true;
  } else {
    singleWord = false;
  }
    
  // if it's a singleWord, check to see if the 
  // target substring matches the last char
  if (singleWord) {
    var lastChar = str.substr( str.length - 1, 1 );
    
    // checks to see if they match
    if (target === lastChar) {
      return true;
    } else {      
      return false;
    }
    
  } else {
    // if it's not a singleWord, check to see if 
    // target substring matches the last word in 
    // arrWords
    if ( target === arrWords[arrWords.length - 1] ) {
      return true;
    } else {
      // get the last chars from the arrWords string
      // equal to the length of the target substring
      var lastChars = arrWords[arrWords.length - 1].substr(target.length);
      
      // check to see if the target substring 
      // matches the lastChars substring
      if (target === lastChars) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// both have to return true
end("Bastian", "n");
end("He has to give me a new name", "name");

// has to return false
end("He has to give me a new name", "na");
end("chicken", "r");
