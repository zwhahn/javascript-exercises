const sumAll = function(firstValue, secondValue) {
    let sum = 0;
    if (firstValue < 0 || secondValue < 0) {
        return 'ERROR'
    } else if (typeof(firstValue) != 'number' || typeof(secondValue) != 'number'){
        return 'ERROR'
    } else if (firstValue < secondValue) {
        var biggerValue = secondValue
        var smallerValue = firstValue
    } else if (firstValue > secondValue) {
        var biggerValue = firstValue
        var smallerValue = secondValue
    } 
    for (i = smallerValue; i <= biggerValue; i++){
        sum = sum + i;
    }
    return sum 
};

// Do not edit below this line
module.exports = sumAll;
