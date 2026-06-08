// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestSubarray(arr, k) {
        // code here
    let map = new Map();
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        // Case 1: sum itself is k
        if (sum === k) {
            maxLen = i + 1;
        }

        // Case 2: check if (sum - k) exists
        if (map.has(sum - k)) {
            let len = i - map.get(sum - k);
            maxLen = Math.max(maxLen, len);
        }

        // Store only first occurrence of sum
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLen;
    }
}
