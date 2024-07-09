const repeatString = function(word, repitionQuantity) {
    let output = ''
    if (repitionQuantity >= 0){
        for (;repitionQuantity > 0; repitionQuantity--){
            output = output.concat(word)
        }
        return output
    }else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
