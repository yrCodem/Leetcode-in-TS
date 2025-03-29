"use strict";
// function intersection(nums1: number[], nums2: number[]): (number | undefined)[]{
//     const sortedArray = []
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums2.includes(nums1[i])) {
//                 sortedArray.push(nums2.shift())
//             }
//         }
//     }
//     return sortedArray
// }
// ;
// Correct Solution
function intersection(nums1, nums2) {
    const s = new Set(nums1);
    return [...new Set(nums2.filter(x => s.has(x)))];
}
1;
