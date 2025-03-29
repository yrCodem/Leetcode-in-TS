"use strict";
function countBadPairs(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i < j && j - i != (nums[j] - nums[i])) {
                return nums.length;
            }
            return 0;
        }
    }
}
