var average = function(salary) {
    const sorted = salary.sort((a, b) => a - b);

    let result = 0;
    for (let i = 1; i < sorted.length - 1; i++)
        result += sorted[i];

    return result / (sorted.length - 2);
};