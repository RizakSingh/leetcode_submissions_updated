/**
 * @param {number[]} deadline
 * @param {number[]} profit
 * @returns {number[]}
 */

class Solution {

    find(parent, x) {
        if (parent[x] === x) return x;

        return parent[x] = this.find(parent, parent[x]);
    }

    jobSequencing(deadline, profit) {

        let jobs = [];
        let maxDeadline = 0;

        for (let i = 0; i < deadline.length; i++) {
            jobs.push({
                deadline: deadline[i],
                profit: profit[i]
            });

            maxDeadline = Math.max(maxDeadline, deadline[i]);
        }

        jobs.sort((a, b) => b.profit - a.profit);

        let parent = [];

        for (let i = 0; i <= maxDeadline; i++) {
            parent[i] = i;
        }

        let count = 0;
        let totalProfit = 0;

        for (let job of jobs) {

            let availableSlot = this.find(parent, job.deadline);

            if (availableSlot > 0) {

                count++;
                totalProfit += job.profit;

                parent[availableSlot] =
                    this.find(parent, availableSlot - 1);
            }
        }

        return [count, totalProfit];
    }
}