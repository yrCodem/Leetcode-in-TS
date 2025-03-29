class Solution {
    compareNM(n: number, m: number): string {
        if (n < m) {
            return "Lesser";
        }
        else if (n == m) {
            return "Equal";
        }
        else {
            return "Greater";
        }
    }
}
