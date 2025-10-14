"use strict";

function grow_1(x) {
    return x.reduce((acc, curr) => acc * curr);
}

console.log(grow_1([1, 2, 3])); // 6
console.log(grow_1([4, 1, 1, 1, 4])); // 16
console.log(grow_1([2, 2, 2, 2, 2, 2])); // 64

function grow_2(x) {
    let multiply = 1;

    for (let i = 0; i < x.length; i++) {
        multiply *= x[i];
    }
    return multiply;
}

console.log(grow_2([1, 2, 3])); // 6
console.log(grow_2([4, 1, 1, 1, 4])); // 16
console.log(grow_2([2, 2, 2, 2, 2, 2])); // 64
