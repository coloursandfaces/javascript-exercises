const reverseString = function(str) {

    let sliced = "";
    let reverse = str.slice(-1);
    let sliceBeg = -2
    let sliceEnd = -1

    for (let i = 0; i < str.length; i++) {
        sliced = str.slice(sliceBeg, sliceEnd);
        reverse += sliced;
        sliceBeg--
        sliceEnd--
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
