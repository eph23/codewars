"use strict";

function squareDigits(num) {
    num = num + "";
    let result = "";
    for (let i = 0; i < num.length; i++) {
        result += +num[i] * +num[i];
    }

    return +result;
}

console.log(squareDigits(3212)); // 9414;
console.log(squareDigits(2112)); // 4114;
console.log(squareDigits(0)); // 0;
