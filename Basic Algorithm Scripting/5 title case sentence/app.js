function titleCase(str) {
  
  // convert the string to all lower case
  str = str.toLowerCase();
  
  // split string into an array of words
  var arrWords = str.split(' ');
  
  // create an empty array to hold the capitalized
  // words
  var arrCapitalizedWords = [];
  
  
  // iterate through the array of words
  for( var i = 0; i < arrWords.length; i++ ) {    
        
    // temp var to hold capitalized word
    var capitalizedWord;
    
    // iterate through the array of chars in 
    // the current word
    for (var x = 0; x < arrWords[i].length; x++) {
      
      // if this is the first char, store it in
      // capitalizedWord and convert it to 
      // upper case
      if ( x === 0 ) {
        capitalizedWord = arrWords[i].charAt(x);
        capitalizedWord = capitalizedWord.toUpperCase();
      } else {
        // if it's not the first char, concat it
        // to string as is
        capitalizedWord += arrWords[i].charAt(x);
      }      
    }
    
    // push the capitalized word to the array of
    // capitalized words
    arrCapitalizedWords.push(capitalizedWord);
  }
  
    
  // rejoin the capitalized words back 
  // into a sentence
  return arrCapitalizedWords.join(' ');  
}

titleCase("I'm a little tea pot");
