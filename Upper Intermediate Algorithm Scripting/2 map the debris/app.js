function orbitalPeriod(arr) {
        
    var GM = 398600.4418;
    var EARTH_RADIUS = 6367.4447;
    
    // loop through the array
    // store name and returned orbital period value
    // in new array
    
    var results = [];
    
    arr.forEach( function(currentElement, index, array) {
        results.push( {
            name: currentElement.name,
            orbitalPeriod: calcOrbitalPeriod(currentElement.avgAlt)
        } );
    });
    
    // return the array of objects
    return results;
    
    // returns the orbital period given the
    // average altitude
    function calcOrbitalPeriod(avgAlt) {                        
        
        var a = avgAlt + EARTH_RADIUS;
        return Math.round( ( 2 * Math.PI ) * Math.sqrt( Math.pow(a, 3) / GM ) );                
    }    
}


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);