function reverseString(inputString) {
    
    let a = 2;   
    let result = inputString.charAt(inputString.length - 1);

    while(a <= inputString.length) {
        result += inputString.charAt(inputString.length - a);
        a++;
    }

    return result;
    
}

// Do not edit below this line
module.exports = reverseString;
