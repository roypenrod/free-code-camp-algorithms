function slasher(arr, howMany) {
    
    // create an empty array to hold the return value
    var finalArr = [];
    
    // check to see if howMany is more than the length
    // of the array
    // if true, return empty array
    if (howMany >= arr.length) {
        return finalArr;
    } else {
        finalArr = arr.slice(howMany);
        return finalArr;
    }    
}

slasher([1, 2, 3], 2), 1;