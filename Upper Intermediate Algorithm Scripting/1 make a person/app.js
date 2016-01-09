var Person = function(firstAndLast) {
    
    var fullName = firstAndLast;
        
    this.getFirstName = function() {
      return fullName.split(' ')[0];
    };
    
    this.getLastName = function() {
      return fullName.split(' ')[1];
    };
    
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(first) {
      var names = fullName.split(' ');
      names[0] = first;
      fullName = names.join(' ');
    };
    
    this.setLastName = function(last) {
      var names = fullName.split(' ');
      names[1] = last;
      fullName = names.join(' ');
    };
    
    this.setFullName = function(firstAndLast) {
      fullName = firstAndLast;
    };

};


var bob = new Person('Bob Ross');
bob.getFullName();

