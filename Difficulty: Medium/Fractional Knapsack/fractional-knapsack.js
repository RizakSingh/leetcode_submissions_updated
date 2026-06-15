/**
 * @param {number[]} val
 * @param {number[]} wt
 * @param {number} capacity
 * @returns {number}
 */

class Solution {
    fractionalKnapsack(val, wt, capacity) {

        let items = [];

        for (let i = 0; i < val.length; i++) {
            items.push({
                value: val[i],
                weight: wt[i],
                ratio: val[i] / wt[i]
            });
        }

        items.sort((a, b) => b.ratio - a.ratio);

        let totalValue = 0;

        for (let item of items) {

            if (capacity >= item.weight) {
                totalValue += item.value;
                capacity -= item.weight;
            } else {
                totalValue += item.ratio * capacity;
                break;
            }
        }

        return Number(totalValue.toFixed(6));
    }
}