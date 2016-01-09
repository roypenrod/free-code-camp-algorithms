function findLongestWord(str) {
  
  // holds the length of the longest word
  var longestWordLength = 0;
  
  // split the string into an array of words
  var arrWords = str.split(' ');
    
  // iterate through the array and check each word
  // to see if it's the longest
  for(var i = 0; i < arrWords.length; i++) {
    if ( arrWords[i].length > longestWordLength ) {
      longestWordLength = arrWords[i].length;
    }
  }
  
  return longestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");