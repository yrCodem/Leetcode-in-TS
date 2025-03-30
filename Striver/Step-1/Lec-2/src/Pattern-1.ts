// N forest Problem
function printForest(N: number): void {
    if (N < 1 || N > 25) {
        console.error("N must be between 1 and 25");
        return;
    }

    for (let i = 0; i < N; i++) {
        console.log("* ".repeat(N).trim());  // "*".repeat(N) -  creates a string containing N occurrences of "*", .trim() removes the trailing space to ensure correct formatting (the code runs perfectly without the .trim() statement)
    }
}

const N = 7;
printForest(N);
