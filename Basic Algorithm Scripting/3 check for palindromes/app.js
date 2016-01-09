function palindrome(str) {
      
    // force the string to lower case
    str = str.toLowerCase();
        
    // break the string down into an
    // array of characters    
    var arrChars = str.split('');
    
    /* 
        iterate through the array and remove
        all non-alphanumeric characters
        including punctuation, spaces, and 
        symbolds
    */    
    var cleanArrChars = [];
    var regEx = /^[^a-z0-9]$/i;
    
    for(var i = 0; i < arrChars.length; i++) {
        var temp = arrChars[i].replace(regEx, '');
        
        if ( temp !== '' ) {
            cleanArrChars.push(temp);
        }
    }
    
    // store the cleaned array of characters
    // as a string 
    var strForward = cleanArrChars.join('');
        
    // reverse the cleaned array of characters
    // and assign it to a var
    cleanArrChars.reverse();
    var strReversed = cleanArrChars.join('');
        
    if (strForward === strReversed) {
        return true;
    } else {
        return false;
    }
}


palindrome("eye");