var hammingWeight = function(n) {
    return [...(n).toString(2)].filter(letter => letter == '1').length;
};