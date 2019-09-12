//在 N * N 的网格上，我们放置一些 1 * 1 * 1 的立方体。
//
// 每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。
//
// 请你返回最终形体的表面积。
//
//
//
//
//
//
// 示例 1：
//
// 输入：[[2]]
//输出：10
//
//
// 示例 2：
//
// 输入：[[1,2],[3,4]]
//输出：34
//
//
// 示例 3：
//
// 输入：[[1,0],[0,2]]
//输出：16
//
//
// 示例 4：
//
// 输入：[[1,1,1],[1,0,1],[1,1,1]]
//输出：32
//
//
// 示例 5：
//
// 输入：[[2,2,2],[2,1,2],[2,2,2]]
//输出：46
//
//
//
//
// 提示：
//
//
// 1 <= N <= 50
// 0 <= grid[i][j] <= 50
//
//

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let ans = 0
    let count = 0
    let firstLoop = true
    while (grid.some(v => v.some(v => v !== 0))) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] !== 0) {
                    ans += 4
                    firstLoop && count++
                    grid[i][j+1] && ans--
                    grid[i][j-1] && ans--
                    grid[i-1] && grid[i-1][j] && ans--
                    grid[i+1] && grid[i+1][j] && ans--
                }
            }
        }
        grid = grid.map(v => v.map(v => v ? --v : 0))
        firstLoop = false
    }
    return ans + count * 2
};

console.log('', surfaceArea([[1,2],[3,4]]))
// console.log('', surfaceArea([[0,1],[2,3]]))
// console.log('', surfaceArea([[0,0],[1,2]]) )
// console.log('', surfaceArea([[0,0],[0,1]]) )
// console.log('', surfaceArea([[0,0],[0,0]]) )

console.log('', [[0,0],[0,0]].every(v => v.every(v => v === 0)))
