var countOdds = function(low, high) {
    return ((high % 2 === 1 ? high : high - 1) - (low % 2 === 1 ? low : low + 1)) / 2 + 1
};