// User function Template for javascript

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    palPartition(s) {
        let n = s.length;

        // isPal[i][j] = true if s[i..j] is palindrome
        let isPal = Array.from({ length: n }, () =>
            Array(n).fill(false)
        );

        // Build palindrome table
        for (let len = 1; len <= n; len++) {
            for (let i = 0; i + len - 1 < n; i++) {
                let j = i + len - 1;

                if (len === 1) {
                    isPal[i][j] = true;
                } else if (len === 2) {
                    isPal[i][j] = s[i] === s[j];
                } else {
                    isPal[i][j] =
                        s[i] === s[j] && isPal[i + 1][j - 1];
                }
            }
        }

        let dp = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            if (isPal[0][i]) {
                dp[i] = 0;
            } else {
                dp[i] = Infinity;

                for (let j = 1; j <= i; j++) {
                    if (isPal[j][i]) {
                        dp[i] = Math.min(dp[i], dp[j - 1] + 1);
                    }
                }
            }
        }

        return dp[n - 1];
    }
}