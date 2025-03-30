function printHalfForest(No: number): void {
    if (No < 1 || No > 25) {
        console.error("N must be between 1 and 25");
        return;
    }

    for (let i = 1; i <= No; i++) {
        console.log("* ".repeat(i));
    }
}

const No = 8;
printHalfForest(No);
console.log(printHalfForest(4));
