var minimumSumSubarray = function(nums, l, r) {

    let ans = Infinity;

    for(let i = 0; i < nums.length; i++){

        let sum = 0;

        for(let j = i; j < nums.length && j - i + 1 <= r; j++){

            sum += nums[j];

            let len = j - i + 1;

            if(len >= l && sum > 0){
                ans = Math.min(ans, sum);
            }
        }
    }

    return ans === Infinity ? -1 : ans;
};