"use strict";

function solution(str) {
    let reversedWord = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
    }
    return reversedWord;
}

console.log(solution("world")); // 'dlrow'
console.log(solution("hello")); // 'olleh'
console.log(solution("")); // ''
console.log(solution("h")); // 'h'
