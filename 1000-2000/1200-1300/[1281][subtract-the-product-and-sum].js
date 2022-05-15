var subtractProductAndSum = function(n) {
    let result = 1;
    let sum = 0;
    while (n > 0) {
        result *= n % 10
        sum += n % 10
        n = Math.trunc(n / 10)
    }
    //
    return result - sum;
};