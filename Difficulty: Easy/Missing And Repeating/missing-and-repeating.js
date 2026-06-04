/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    findTwoElement(arr) {
        let set = new Set();
        let repeating = -1;
        let missing = -1;

        for (let num of arr) {
            if (set.has(num)) {
                repeating = num;
            }
            set.add(num);
        }

        for (let i = 1; i <= arr.length; i++) {
            if (!set.has(i)) {
                missing = i;
                break;
            }
        }

        return [repeating, missing];
    }
}