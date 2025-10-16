"use strict";

function getSum(a, b) {
    if (a === b) return a;

    let sum = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

getSum(0, -1); // -1
getSum(0, 1); // 1
getSum(2, 2); // 2
getSum(1, 2); // 3
