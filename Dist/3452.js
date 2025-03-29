"use strict";
// Given an array of integers nums and an integer k, an element nums[i] is considered good if it is strictly greater than the elements at indices i - k and i + k (if those indices exist). If neither of these indices exists, nums[i] is still considered good.
// Return the sum of all the good elements in the array.
// Example 1:
// Input: nums = [1,3,2,1,5,4], k = 2
// Output: 12
// Explanation:
// The good numbers are nums[1] = 3, nums[4] = 5, and nums[5] = 4 because they are strictly greater than the numbers at indices i - k and i + k.
// Example 2:
// Input: nums = [2,1], k = 1
// Output: 2
// Explanation:
// The only good number is nums[0] = 2 because it is strictly greater than nums[1].
// return return
// function sumOfGoodNumbers(nums:number[], k:number[]):number {
//     let sum = 0;
//     let good = true
//     for (let i = 0; i < nums.length; i++) {
//         if ((nums[i] - nums[k]))
//     }
//     return sum;
// }
function sumOfGoodNumbers(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
function sumOfDigitSums(low, high) {
    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum = (sum + digitSum(i)) % 9;
    }
    return sum === 0 ? 9 : sum;
}
