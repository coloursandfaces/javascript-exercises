const fibonacci = function(num) {
    let cur = 1
    let prevSum = 0

    if (num < 0) {
        return "OOPS";
    } else {
        for (let i=2; i < num; i++) {
            let next = cur + prevSum;
            prevSum = cur;
            cur = next;
        } return prevSum + cur;
    }
};

// Do not edit below this line
module.exports = fibonacci;
