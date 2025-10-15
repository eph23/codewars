"use strict";

function countSheeps(sheep) {
    let count = 0;

    sheep = sheep.flat();

    for (let s of sheep) {
        if (s === true) {
            count += 1;
        }
    }
    return count;
}

const sheep = [
    [[]],
    [[undefined]],
    [[null]],
    [[false]],
    [[true]],
    [[undefined, null, false, true]],
    [[undefined, null, false, true, true, false, null, undefined]],
    [
        [
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            false,
            true,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            true,
            true,
        ],
    ],
];

console.log(countSheeps(sheep[0])); // 0
console.log(countSheeps(sheep[1])); // 0
console.log(countSheeps(sheep[2])); // 0
console.log(countSheeps(sheep[3])); // 0
console.log(countSheeps(sheep[4])); // 1
console.log(countSheeps(sheep[5])); // 1
console.log(countSheeps(sheep[6])); // 2
console.log(countSheeps(sheep[7])); // 17
