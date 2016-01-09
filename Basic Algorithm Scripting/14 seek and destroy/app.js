function destroyer(arr) {
    
    var targetArr = arr;
    
    // make sure there is at least one
    // additional argument
    if (arguments.length === 1) {
        return ['error:  You must supply the array and at least 1 additional parameter to remove from the array.'];
    } else {
        
        // iterate through the arguments object and store them in args
        var args = [];
        
        for(var i=1; i< arguments.length; i++) {
            args.push( arguments[i] );            
        }               
    }
    
    // filter the targetArr
    var filteredArr = targetArr.filter( function(value, index, arr) {
        
        // iterate through the args array 
        for(var i=0; i < args.length; i++) {

            // search for the value in the args array
            if ( args.indexOf(value) === -1 ) {
                // value wasn't found in the args array
                // keep it         
                return true;
            } else {
                // value was found in the args array
                // kick it 
                return false;
            }
        }        
    });
    
    // filtered
    return filteredArr;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);