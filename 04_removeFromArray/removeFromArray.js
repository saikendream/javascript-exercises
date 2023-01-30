const removeFromArray = function(arr, ...del) {
    // Creates an empty array to store the expected return
    let result = [];

    // Goes through every single element given to "arr"
    arr.forEach((element) => {
        // If "del" DOES NOT UNCLUDE said element;
        if(!del.includes(element)) {
            // Push said element to "result"
            result.push(element);
        }
    })

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
