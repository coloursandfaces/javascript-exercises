const repeatString = function(str, num) {

    let hold = "";
    
    if (num < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < num; i++) {
        hold += str;
    }

    return hold;
};

// Do not edit below this line
module.exports = repeatString;
