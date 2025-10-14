"use strict";

function areYouPlayingBanjo(name) {
    const corrected = name.toLowerCase();
    if (corrected[0] === "r") {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}

console.log(areYouPlayingBanjo("Adam")); // "Adam does not play banjo"
console.log(areYouPlayingBanjo("Paul")); // "Paul does not play banjo"
console.log(areYouPlayingBanjo("Ringo")); // "Ringo plays banjo"
console.log(areYouPlayingBanjo("bravo")); // "bravo does not play banjo"
console.log(areYouPlayingBanjo("rolf")); // "rolf plays banjo"
