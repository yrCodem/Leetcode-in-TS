"use strict";
function addedInteger(nums1, nums2) {
    const minNum1 = Math.min(...nums1);
    const minNum2 = Math.min(...nums2);
    return minNum2 - minNum1;
}
