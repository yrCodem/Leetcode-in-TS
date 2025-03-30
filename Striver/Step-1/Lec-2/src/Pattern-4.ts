// N-dimensional triangle where each row contains the row number
function halfForestWithSameNumber(num1: number): void {
    if (num1 < 1 || num1 > 25) {
        console.error("Number must be between 1 and 25")
        return
    }
    for (let i = 1; i <= num1; i++){
        const row = Array(i).fill(i) // Creates an array with the length i, filled with the row number i
        .join(" ") // Converts the array into the space separated string
        console.log(row);
    }
}

// Preferred way of printing the result
const number1 = 10
halfForestWithSameNumber(number1)

// Prints the same result but throws an undefined at the end
console.log(halfForestWithSameNumber(6));
