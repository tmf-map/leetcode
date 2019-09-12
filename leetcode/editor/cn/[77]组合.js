//给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
//
// 示例:
//
// 输入: n = 4, k = 2
//输出:
//[
//  [2,4],
//  [3,4],
//  [2,3],
//  [1,2],
//  [1,3],
//  [1,4],
//]
// Related Topics 回溯算法



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (n < 1 || k < 1) {
        return []
    }
    this.ans = []
    this.n = n
    this.k = k
    this.selected = []
    explore.bind(this)(1)
    return this.ans
}.bind({});

function explore (start) {
    console.log(this.selected)
    if (this.selected.length === this.k) {
        return this.ans.push([...this.selected])
    }
    for (let i = start; i <= this.n; i++) {
        this.selected.push(i)
        explore.bind(this)(i + 1)
        this.selected.pop()
    }
}
//leetcode submit region end(Prohibit modification and deletion)

console.log(combine(4, 2))
