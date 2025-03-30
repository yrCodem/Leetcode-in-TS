"use strict";
// N forest Problem
function printForest(N) {
    if (N < 1 || N > 25) {
        console.error("N must be between 1 and 25");
        return;
    }
    for (let i = 0; i < N; i++) {
        console.log("*".repeat(N).trim());
    }
}
const N = 7;
printForest(N);
