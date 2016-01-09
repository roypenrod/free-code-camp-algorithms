function bouncer(arr) {
     
    // creates a filter for arr
    var filteredArr = arr.filter(function(value, index, arr) {
        
        if (value === false) {
            return false;
        }
        
        if (value === null) {
            return false;
        }
        
        if (value === 0) {
            return false;
        }
        
        if (value === "") {
            return false;
        }
        
        if (value === undefined) {
            return false;
        }
        
        if ( isNaN(value) && ( typeof value !== "string" ) ) {
            return false;
        }
        
        // if it makes it here, value passed all
        // falsy checks
        return true;
    });

    // arr is filtered
    return filteredArr;  
}


bouncer([7, "ate", "", false, 9]);