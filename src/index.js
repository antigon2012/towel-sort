// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (arguments.length === 0) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnIdx = i % 2;
            columnIdx === 0
                ? res.push(matrix[i][j])
                : res.push(matrix[i][matrix[i].length - j - 1]);
        }
    }
    return res;
};
