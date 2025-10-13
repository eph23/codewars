"use strict";
function squareSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2;
    }
    return sum;
}

console.log(squareSum([1, 2])); // returns 5
console.log(squareSum([0, 3, 4, 5])); // returns 50
console.log(squareSum([])); // returns 0
