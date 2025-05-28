function isPalindrome(s) {
    var cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    var left = 0;
    var right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
