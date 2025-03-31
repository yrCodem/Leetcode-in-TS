"use strict";
// Star Triangle problem
function starTriangle(num1) {
    if (num1 < 1 || num1 > 25) {
        console.error("Number must be between 1 and 25");
        return;
    }
    for (let i = 0; i <= num1; i++) {
        // For leading space
        const space = " ".repeat(num1 - i - 1); // Creates a string of spaces with length num1 - i - 1, where i is the current row number
        // For stars pattern
        const stars = "*".repeat(2 * i + 1); // Creates a string of stars with length 2 * i + 1, where i is the current row number
        console.log(space + stars);
    }
}
const num1 = 5;
starTriangle(num1);
