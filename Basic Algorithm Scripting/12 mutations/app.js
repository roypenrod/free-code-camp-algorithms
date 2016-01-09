function mutation(arr) {
    
    // break the array down into strings
    // convert them to lowercase
    var targetStr = arr[0].toLowerCase();
    var searchStr = arr[1].toLowerCase();
    
    // break the searchStr down into an array of chars
    var searchCharsArr = searchStr.split('');
    
    // iterate through the searchCharsArr
    
    for (var i=0; i < searchCharsArr.length; i++) {
            
        // check to see if the char is present in targetStr
        var result = targetStr.indexOf( searchCharsArr[i] );
        
        // if result = -1, char wasn't found
        // return false
        if (result < 0) {
            return false;
        }        
    }
    
    // if it makes it this far, all the chars were found
    // return true
    return true;
}


mutation(["hello", "hey"]);
