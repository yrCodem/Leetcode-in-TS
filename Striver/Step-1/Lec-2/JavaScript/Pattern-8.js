"use strict";
// Reverse Star Triangle problem
function reverseStarTriangle(M) {
    if (M < 1 || M > 25) {
        console.error("N should be between 1 and 25");
    }
    for (let i = 0; i <= M; i++) {
        const stars = "*".repeat(2 * (M - i) - 1);
        const spaces = " ".repeat(i);
        console.log(stars + spaces);
    }
}
const M = 10;
reverseStarTriangle(M);
