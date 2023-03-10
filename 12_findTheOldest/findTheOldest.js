const findTheOldest = function(arr) {
    let today = new Date().getFullYear();
    let oldestAge = 0;
    let oldestPeople = [];
    for (let person of arr) {
        if (!('yearOfDeath' in person)) {
            person.yearOfDeath = today;
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPeople = [person];
        } else if (age === oldestAge) {
            oldestPeople.push(person);
        }
    }
    return oldestPeople[0];
};



// Do not edit below this line
module.exports = findTheOldest;
