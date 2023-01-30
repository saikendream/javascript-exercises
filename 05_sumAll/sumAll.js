const sumAll = function(a, b) {
    // Creates an empty variable where
    // the sum shall be stored
    let result = 0;

    if(a < 0 || b < 0 ||  typeof a !== 'number' || typeof b !== 'number'){
        result = "ERROR";
    } else if(a < b){
        while(a < b) {
            let c = a;
            result = result + c;
            a = a + 1;
        }

        result = result + b;
    } else if(a > b){
        while(b < a) {
            let c = b;
            result = result + b;
            b = b + 1;
        }

        result = result + a;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
