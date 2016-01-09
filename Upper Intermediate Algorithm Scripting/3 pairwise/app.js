function pairwise(arr, arg) {
    /*
    NOTE:  
    
    This is not the most efficient way to solve the problem.
    
     In this situation, I thought it was more important to show the
     way I think about breaking down an algorithm rather than writing
     the most efficient code possible.
    
     If performance turned out to be an issue, we could refactor 
     this code for efficiency.
    
     -- Roy
    */
    
    // is the arr empty?  
    // return 0
    if (arr.length === 0) {
        return 0;
    }
    
    // arg is our target value
    var targetValue = arg;
    
    // create an array of objects to make it easier to 
    // track whether a specific value/index pair has been
    // used or not
    var availableNumbers = [];
    
    arr.forEach(function (currentValue, index, array) {
        availableNumbers.push({
            value: currentValue,
            index: index,
            used: false
        });
    });    
    
    // create an array of objects to hold the pairs found
    var foundPairs = [];
    
    // loop through the availableNumbers array and look for pairs
    availableNumbers.forEach(function(currentElement, index, array) {
            
        // what number can this currentElement's value pair with?
        var pairValue = targetValue - currentElement.value;

        // loop through the availableNumbers array to find pairValue
        // criteria:  
        //   currentElement.used === false
        //   pairValue === pairCheckElement.value
        //   currentElement.index !== pairCheckElement.index
        //   pairCheckElement.used === false

        availableNumbers.forEach(function(pairCheckElement, index, array) {

            // has the currentElement already been used?                
            if (currentElement.used === false) {      
                
                // does the pairValue match the value?
                if (pairValue === pairCheckElement.value) {

                    // is this the same value?
                    if (currentElement.index !== pairCheckElement.index) {

                        // has this element already been used?
                        if (pairCheckElement.used === false) {

                            // add the currentElement and the pairCheckElement
                            // to the foundPairs array
                            foundPairs.push(currentElement);
                            foundPairs.push(pairCheckElement);

                            // mark the currentelement and the pairCheckElement
                            // used = true
                            currentElement.used = true;
                            pairCheckElement.used = true;
                        }
                    }
                }
            } // end of outer if statement
            
        }); // end of inner loop        

    }); // end of main loop   
    
    // sum the indices of the foundPairs
    var sumOfIndices = 0;
    foundPairs.forEach(function(element, index, array) {
        sumOfIndices += element.index;
    });
    
    // return the anwer
    return sumOfIndices;
}


pairwise([1,4,2,3,0,5], 7);