const palindromes = function (inputString) {
    spaceless = inputString.split(' ').join('');
    punctuationless = spaceless.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    noCaps = punctuationless.toLowerCase();
    let stringArray = noCaps.split('');
    console.log(`stringArray: ${stringArray}`)
    reverseArray = stringArray.reverse();
    console.log(`reverseArray: ${reverseArray}`)
    reverseString = reverseArray.join('')
    console.log(`reverseString: ${reverseString}`)
    if (reverseString === noCaps){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
