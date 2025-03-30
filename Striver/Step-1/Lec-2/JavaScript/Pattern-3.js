"use strict";
function printHalfForestWithNumbers(numberTree) {
    if (numberTree < 1 || numberTree > 25) {
        console.error("N must be between 1 and 25");
        return;
    }
    for (let i = 1; i <= numberTree; i++) {
        let row = Array.from({ length: i }, (_, index) => index + 1) // Creates an array [1,2,3...........N]
            .join(' '); // Converts the array into a spaced string
        console.log(row); // Prints each row
    }
}
// Use this method of printing the result
const numberTree = 8;
printHalfForestWithNumbers(numberTree);
// This throws an Undefined at the end as the result does not return anything
console.log(printHalfForestWithNumbers(10));
