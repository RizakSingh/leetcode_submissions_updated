/**
 * @param {number[]} arr
 * @param {number[]} dep
 * @returns {number}
 */

class Solution {
    minPlatform(arr, dep) {
        // code here
                arr.sort((a, b) => a - b);
        dep.sort((a, b) => a - b);

        let i = 0;
        let j = 0;

        let platforms = 0;
        let maxPlatforms = 0;

        while (i < arr.length) {

            if (arr[i] <= dep[j]) {

                platforms++;

                maxPlatforms = Math.max(maxPlatforms, platforms);

                i++;
            }
            else {

                platforms--;

                j++;
            }
        }

        return maxPlatforms;
    }
}