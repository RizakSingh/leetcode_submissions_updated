/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let nums = [];
    let fact = 1;

    for (let i = 1; i < n; i++) {
        fact *= i;
    }

    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    k--; // convert to 0-based indexing

    let result = "";

    while (nums.length > 0) {
        let index = Math.floor(k / fact);

        result += nums[index];

        nums.splice(index, 1);

        k %= fact;

        if (nums.length > 0) {
            fact /= nums.length;
        }
    }

    return result;
};