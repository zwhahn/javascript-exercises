const removeFromArray = function(inputArray, ...valuesToRemove) {
    let outputArray = [];
    // let lengthOfValuesToRemove = valuesToRemove.length;
    for (inputValue of inputArray) {
        if (valuesToRemove.includes(inputValue) === false) {
            outputArray.push(inputValue);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;