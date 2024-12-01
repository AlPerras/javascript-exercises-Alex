const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return "ERROR";
    }
    let length = x + y;
    let sum = 0;
    if (x > y) {
        for (let i = y; i < length; i++) {
            sum += i;
        }
    } else if (y > x) {
        for (let i = x; i < length; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
