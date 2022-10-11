function repeatString(x, y) {
    
    let z = 0;
    let result = '';

    while (z < y) {
        z++;
        result += x;
    }

    if (y < z) {
        result = 'ERROR';
    }

    return result;
}

// Do not edit below this line
module.exports = repeatString;
