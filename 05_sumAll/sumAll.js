const sumAll = function(num1, num2) {

    let larger = num2
    let smaller = num1

    if (num2 > num1) {
        larger = num2;
        smaller = num1;
    } else if (num1 > num2) {
        larger = num1;
        smaller = num2;
    } else if (num1 === num2) {
        larger = num1;
        smaller = num2;
    }



    difference = larger - smaller;
    console.log(difference);
    finalSum = 0;

    for (let i = 0; i < difference +1; i++) {
        if (larger < 0 || smaller < 0) {
            return finalSum = "ERROR";
        } else if (typeof(larger) != 'number' || typeof(smaller) != 'number') {
            return finalSum = "ERROR";
        } else {
            finalSum += smaller;
            smaller++;
        }
    }

    if (isNaN(difference)) {
        return finalSum = "ERROR";
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
