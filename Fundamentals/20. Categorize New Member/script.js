"use strict";
function openOrSenior(data) {
    let result = [];
    
    for (let array of data) {
        console.log(array[0], array[1]);
        if (array[0] >= 55 && array[1] > 7) {
            result.push("Senior");
        } else {
            result.push("Open");
        }
    }

    return result;
}

console.log(
    openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
    ])
); // ['Open', 'Senior', 'Open', 'Senior']
console.log(
    openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [53, 23],
    ])
); // ['Open', 'Open', 'Open', 'Open']
console.log(
    openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12],
    ])
); // ['Senior', 'Open', 'Open', 'Open']
