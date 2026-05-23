var gcdOfOddEvenSums = function(n) {
    let oddsum = n * n;
    let evensum = n * (n + 1);

    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    return gcd(oddsum, evensum);
};