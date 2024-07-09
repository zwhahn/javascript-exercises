const reverseString = function(randomString) {
    let stringLength = randomString.length;
    const charArray = [];
    let output = '';
    for (; stringLength > 0; stringLength--) {
        character = randomString[stringLength-1]
        charArray.push(character)
    } for (let char of charArray) {
        output = output.concat(char)
    } return output
};

// Do not edit below this line
module.exports = reverseString;
