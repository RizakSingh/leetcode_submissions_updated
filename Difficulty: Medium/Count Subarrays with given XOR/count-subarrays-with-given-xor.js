/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    subarrayXor(arr, k) {
        // code here
            let map = new Map();
    map.set(0, 1);

    let xr = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        xr ^= arr[i];

        let need = xr ^ k;

        if (map.has(need)) {
            count += map.get(need);
        }

        map.set(xr, (map.get(xr) || 0) + 1);
    }

    return count;
    }
}