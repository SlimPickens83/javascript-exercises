function removeFromArray(x, y, z, a, b) {
    let newArray = Array.from(arguments[0]);
    let result = newArray.filter(removeValues);
  
    function removeValues(newArray) {
      return newArray !== y && newArray !== z && newArray !== a && newArray !== b;
    }

    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
