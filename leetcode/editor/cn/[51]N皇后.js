//n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
//
//
//
// 上图为 8 皇后问题的一种解法。
//
// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
//
// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
//
// 示例:
//
// 输入: 4
//输出: [
// [".Q..",  // 解法 1
//  "...Q",
//  "Q...",
//  "..Q."],
//
// ["..Q.",  // 解法 2
//  "Q...",
//  "...Q",
//  ".Q.."]
//]
//解释: 4 皇后问题存在两个不同的解法。
//
// Related Topics 回溯算法



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[][]}
 */
'use strict'
var solveNQueens = function(n) {
    this.matrix = Array(n).fill('.').map(v => Array(n).fill(v));
    this.cols = Array(n).fill('.');
    this.diag1 = Array(2 * n - 1).fill('.');
    this.diag2 = Array(2 * n - 1).fill('.');
    this.ans = [];
    this.n = n
    explore.bind(this)(0);
    return this.ans;
}.bind({});

function explore(r) {
    if (r === this.n) {
        // found one solution, add to the ans set
        this.ans.push(this.matrix.map(v => v.join('')));
        return;
    }
    // Try every column
    for (let c = 0; c < this.n; c++) {
        if (available.bind(this)(r, c)) {
            addQueen.bind(this)(r, c);
            explore.bind(this)(r + 1);
            removeQueen.bind(this)(r, c);
        }
    }
}

function available(r, c) {
    return this.cols[c] === '.'
        && this.diag1[c + r] === '.'
        && this.diag2[c - r + this.n - 1] === '.';
}

function addQueen(r, c) {
    this.matrix[r][c] = 'Q';
    this.cols[c] = 'x';
    this.diag1[c + r] = 'x';
    this.diag2[c - r + this.n - 1] = 'x';
}

function removeQueen(r, c) {
    this.matrix[r][c] = '.';
    this.cols[c] = '.';
    this.diag1[c + r] = '.';
    this.diag2[c - r + this.n - 1] = '.';
}
//leetcode submit region end(Prohibit modification and deletion)

console.log(solveNQueens(4))

// var solveNQueens2 = function(n) {
//     const res = [];
//     backtrack2(res, n);
//     return res;
// };
//
// function backtrack2(res, n, board = [], r = 0) {
//     if (r === n) {
//         res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
//         return;
//     }
//     for (let c = 0; c < n; c++) {
//         if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
//             board.push(c);
//             backtrack2(res, n, board, r + 1);
//             board.pop();
//         }
//     }
// }

// console.log(solveNQueens2(4))
