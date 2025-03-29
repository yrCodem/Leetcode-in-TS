"use strict";
class Solution {
    compareNM(n, m) {
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
