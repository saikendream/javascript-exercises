const palindromes = function (input) {
    input = input.replace(/[^a-zA-Z]/g, "");
    input = input.toUpperCase();

    let charCount = input.length;
    let pali = 0;

    for (i = 0; i < charCount; i++) {
        if(input[i] == (input[(charCount - (i + 1))])) {
            pali = pali + 1;
        };
    };

    if(pali == (charCount)) {
        return true;
    } else {return false;};
};

// Do not edit below this line
module.exports = palindromes;
