"use strict";

function stringToArray_1(str) {
    return str.split(" ");
}

console.log(stringToArray_1("Robin Singh")); // ["Robin", "Singh"]
console.log(stringToArray_1("I love arrays they are my favorite")); // ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray_2(str) {
    let arr = [];
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i];
        } else {
            arr.push(newStr);
            newStr = "";
        }
    }

    if (newStr !== "") {
        arr.push(newStr);
    }

    return arr;
}

console.log(stringToArray_2("Robin Singh")); // ["Robin", "Singh"]
console.log(stringToArray_2("I love arrays they are my favorite")); // ["I", "love", "arrays", "they", "are", "my", "favorite"]
