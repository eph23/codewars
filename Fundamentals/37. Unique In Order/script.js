"use strict";
var uniqueInOrder = function (sequence) {
    if (!sequence || sequence.length === 0) return [];

    const result = [];
    let last;
    
    const seq = typeof sequence === "string" ? sequence.split("") : sequence;

    for (const item of seq) {
        if (item !== last) {
            result.push(item);
            last = item;
        }
    }

    return result;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B"];
