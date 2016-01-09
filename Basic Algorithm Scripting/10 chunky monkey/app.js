function chunk(arr, num) {
       
    // create an empty array to hold the final result
    var arrFinalResult = [];
    
    // create a temp array to push to arrFinalResult
    var arrTemp = [];
    
    var x = 0;
    
    
    while (arr.length > 0) {
        // iterate through arr 
        for(var i=0; i < num; i++) {
            
            // create temp var to hold the data returned
            // from arr.shift()
            var temp = arr.shift();
            
            // check to see if the temp var is undefined
            if (temp === undefined) {
                break;
            } else {
                arrTemp[i] = temp;
            }
        }    
        
        arrFinalResult[x] = arrTemp;
        
        arrTemp = [];
        
        x++;
    }
        
    return arrFinalResult;
}


chunk(["a", "b", "c", "d"], 2);