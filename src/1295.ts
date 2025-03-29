const findNumbers = (nums: number[]): number => {
    let countEvenDigits = 0;
    for (const num of nums) {
        if (String(num).length % 2 === 0) {
            countEvenDigits++;
        }
    }
    return countEvenDigits;
};
