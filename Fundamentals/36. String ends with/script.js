"use strict";
function solution(str, ending) {
    if (str.length === 0 && ending.length > 0) {
        return false;
    } else if (str.endsWith(ending)) {
        return true;
    } else {
        return false;
    }
}

console.log(solution("abcde", "cde")); // true
console.log(solution("abcde", "abc")); // false
console.log(solution("abcde", "abc")); // false
console.log(solution("", "empty string")); // false
console.log(solution("", "")); // true
