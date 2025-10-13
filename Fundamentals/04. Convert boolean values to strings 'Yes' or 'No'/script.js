"use strict";

function boolToWord(bool) {
    if (bool === true) return "Yes";
    if (bool === false) return "No";
}

console.log(boolToWord(true)); // 'Yes'
console.log(boolToWord(false)); // 'No'
