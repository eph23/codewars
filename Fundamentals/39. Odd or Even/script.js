"use strict";

function oddOrEven(array) {
    if (array.length === 0) return "even";

    let sum = array.reduce((acc, curr) => acc + curr, 0);

    if (sum % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(oddOrEven([0])); // 'even'
console.log(oddOrEven([1])); // 'odd'
console.log(oddOrEven([])); // 'even'
