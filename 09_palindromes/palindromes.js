function isLetter(char) {
    return (/[a-zA-Z]/).test(char);
};

const palindromes = function (str) {
    let forward = "";
    let backward = "";
    let sliced = str.toLowerCase().split("");
    let revSliced = str.toLowerCase().split("").reverse();

    for (let i=0; i < sliced.length; i++) {
        if (isLetter(sliced[i])) {
            forward = forward + sliced[i];
        } 
    } 

    for (let i=0; i < revSliced.length; i++) {
        if (isLetter(revSliced[i])) {
            backward = backward + revSliced[i];
        }
    } 

    if (forward === backward) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
