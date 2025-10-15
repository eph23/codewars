"use strict";

function filter_list_1(arr) {
    return arr.filter((item) => typeof item !== "string");
}

console.log(filter_list_1([1, 2, "a", "b"])); // [1,2]
console.log(filter_list_1([1, "a", "b", 0, 15])); // [1,0,15]
console.log(filter_list_1([1, 2, "aasf", "1", "123", 123])); // [1,2,123]

function filter_list_2(arr) {
    let newArr = [];

    for (let item of arr) {
        if (typeof item !== "string") {
            newArr.push(item);
        }
    }

    return newArr;
}

console.log(filter_list_2([1, 2, "a", "b"])); // [1,2]
console.log(filter_list_2([1, "a", "b", 0, 15])); // [1,0,15]
console.log(filter_list_2([1, 2, "aasf", "1", "123", 123])); // [1,2,123]
