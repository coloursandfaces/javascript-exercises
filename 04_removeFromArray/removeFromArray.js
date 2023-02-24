const removeFromArray = function(array, ...remove) {

    let remain = [];

    for (let i = 0; i < array.length; i++) {
        if (remove.includes(array[i])) {
            remain;
        } else {
            remain.push(array[i]);
        }
    }
    return remain;
};

// Do not edit below this line
module.exports = removeFromArray;

