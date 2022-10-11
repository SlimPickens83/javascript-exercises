function sumAll(x, y) {
  
    if (y < 0 || x < 0 || typeof x != 'number' || typeof y != 'number') {
      
      return 'ERROR';
    
    } else if (y > x) {
      
        let difference = y - x - 1;
        let midSum = x;
      
        for (i = 0; i < difference; i++) {
          x += 1;
          midSum += x;
        }
      
        result = y + midSum;
        return result;
  
    } else {
      
        let difference = x - y - 1;
        let midSum = y;
      
        for (i = 0; i < difference; i++) {
          y += 1;
          midSum += y;
        }
      
        result = x + midSum;
        return result;
      
    }
        
  }
// Do not edit below this line
module.exports = sumAll;
