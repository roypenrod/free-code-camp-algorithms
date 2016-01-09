function where(arr, num) {
    
    // sort arr
    arr.sort(function compareNumbers( a, b) {
        return a-b;
    });
    
    // holds the arr index where num should be inserted
    var insertHere;
    
    // iterate through arr
    for (var i=0; i < arr.length; i++) {
        
        // checks to see if the value of 
        // the arr element is equal to 
        // or greater than num
        // if true, this is where num
        // should be inserted        
        if ( arr[i] >= num) {
            insertHere = i;
            break;
        }        
    }
    
    // if we reach this point and insertHere is still
    // undefined, set insertHere to arr.length
    if (insertHere === undefined) {
        insertHere = arr.length;
    }
    
    // if it gets this far, I screwed up
    return insertHere;
}


where([10, 20, 30, 40, 50], 35);