/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);

    for (let i = temperatures.length - 1; i >= 0; i--) {

        while (
            stack.length &&
            temperatures[stack[stack.length - 1]] <= temperatures[i]
        ) {
            stack.pop();
        }

        if (stack.length) {
            result[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return result;
};