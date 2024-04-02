const fibonacci = function(index) {
    let fibo = [0, 1];
    index = parseInt(index);
    index = index - 1;
    let n = (fibo.length) - 1;

    for(i = 0; i < index; i++) {
        fibo.push(fibo[(n - 1)] + fibo[n]);
        n = (fibo.length) - 1;
    }

    if(index < 0) {
        return "OOPS";
    } else { return fibo[(index + 1)]; };

};

// Do not edit below this line
module.exports = fibonacci;
