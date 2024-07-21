const fibonacci = function(num) {
    let fibArray = [1, 1];
    if (num == 0){
        return 0
    }
    if (num < 0){
        return "OOPS"
    }
    for (i=2; i < num; i++){
        // console.log(`fibArray[i-1] ${fibArray[i-1]}`);
        let nextVal = fibArray[i-2] + fibArray[i-1];
        fibArray.push(nextVal);
    }
    // console.log(`fibArray: ${fibArray}`)
    return fibArray[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
