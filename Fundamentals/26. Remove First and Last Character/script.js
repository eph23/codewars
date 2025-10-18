"use strict";
function removeChar(str) {
    if (str.length < 2) {
        return "";
    }

    return str.slice(1, str.length - 1);
}

console.log(removeChar("eloquent")); // 'loquen'
console.log(removeChar("country")); // 'ountr'
console.log(removeChar("person")); // 'erso'
console.log(removeChar("place")); // 'lac'
console.log(removeChar("ooopsss")); // 'oopss'
