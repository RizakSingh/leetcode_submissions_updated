// User function Template for javascript
/**
 * @param {number[]} A
 * @param {number} N
 * @returns {number}
 */
class Solution {
    smallestSumSubarray(A, N) {
        let currSum = A[0];
        let minSum = A[0];

        for (let i = 1; i < N; i++) {
            // If current sum becomes positive, start new subarray
            if (currSum > 0) {
                currSum = A[i];
            } else {
                currSum += A[i];
            }

            if (currSum < minSum) {
                minSum = currSum;
            }
        }

        return minSum;
    }
}
