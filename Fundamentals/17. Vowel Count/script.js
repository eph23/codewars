"use strict";

function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let s of str) {
        for (let v of vowels) {
            if (s === v) {
                count++;
            }
        }
    }
    return count;
}

getCount("abracadabra"); // 5
