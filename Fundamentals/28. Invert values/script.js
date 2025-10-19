"use strict";

function invert(array) {
    if (array.length === 0) {
        return [];
    } else {
        return array.map((arr) => -1 * arr);
    }
}

console.log(invert([1, 2, 3, 4, 5])); // [-1,-2,-3,-4,-5]
console.log(invert([1, -2, 3, -4, 5])); // [-1,2,-3,4,-5]
console.log(invert([])); // []
console.log(invert([0])); // [0]
