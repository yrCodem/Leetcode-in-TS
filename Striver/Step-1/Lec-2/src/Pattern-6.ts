// Reverse Number Triangle
function reverseNumberTriangle(nums:number):void {
    if (nums < 1 || nums > 25){
        console.error("Number must be between 1 and 25")
    }
    for(let i = 0; i < nums; i++){
        const row = Array(nums - i).fill(i + 1).join(" "); // Creates an array of the length nums - i, filled with the number i + 1, and then joins the array into a space-separated string
        console.log(row);
    }
}
const nums = 6
reverseNumberTriangle(nums)

// Loop Iterations & Output:
//     i = 0 → Array(6).fill(1) → "1 1 1 1 1 1"
//     i = 1 → Array(5).fill(2) → "2 2 2 2 2"
//     i = 2 → Array(4).fill(3) → "3 3 3 3"
//     i = 3 → Array(3).fill(4) → "4 4 4"
//     i = 4 → Array(2).fill(5) → "5 5"
//     i = 5 → Array(1).fill(6) → "6"
