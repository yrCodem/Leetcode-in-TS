function addedInteger(nums1:number[], nums2:number[]): number {
    const minNum1 = Math.min(...nums1);
    const minNum2 = Math.min(...nums2);
    return minNum2 - minNum1

}
