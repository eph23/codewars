"use strict";

var countSheep = function (num) {
    let str = "";

    if (num === 0) {
        return str;
    } else {
        for (let i = 0; i < num; i++) {
            //    console.log(num);
            str += `${i + 1} sheep...`;
        }
    }

    return str;
};

console.log(countSheep(0)); // ""
console.log(countSheep(1)); // "1 sheep..."
console.log(countSheep(2)); // "1 sheep...2 sheep..."
console.log(countSheep(3)); // "1 sheep...2 sheep...3 sheep..."
