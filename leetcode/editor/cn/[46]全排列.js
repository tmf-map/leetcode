//给定一个没有重复数字的序列，返回其所有可能的全排列。
//
// 示例:
//
// 输入: [1,2,3]
//输出:
//[
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
//]
// Related Topics 回溯算法

// var permute = function(nums) {
//     if (!nums.length) return []
//     let ans = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             [nums[i], nums[j]] = [nums[j], nums[i]]
//             ans.push(nums)
//                 [nums[i], nums[j]] = [nums[j], nums[i]]
//         }
//     }
//     return ans
// };

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//     if (!nums.length) return []
//     let ans = []
//     function backtrack (nums, start) {
//         let len = nums.length
//         if (start === len - 1) {
//             ans.push([...nums])
//         } else {
//             for (let i = start; i < len; i++) {
//                 [nums[start], nums[i]] = [nums[i], nums[start]]
//                 backtrack(nums, start + 1)
//                 ;[nums[start], nums[i]] = [nums[i], nums[start]]
//             }
//         }
//     }
//     backtrack(nums, 0, ans)
//     return ans
// };

var permute = function(nums) {
    if (!nums.length) return []
    this.nums = nums
    this.ans = []
    this.path = []
    this.cols = Array(3).fill(true)
    explore.bind(this)(0)
    return this.ans
}.bind({});

function explore (pathLen) {
    if (pathLen === this.nums.length) {
        this.ans.push([...this.path])
        return
    }
    for (let c = 0; c < this.nums.length; c++) {
        if (available.bind(this)(c)) {
            add.bind(this)(c)
            explore.bind(this)(pathLen + 1)
            remove.bind(this)(c)
        }
    }
}

function available (c) {
    return this.cols[c]
}

function add (c) {
    this.path.push(this.nums[c])
    this.cols[c] = false
}

function remove (c) {
    this.path.pop()
    this.cols[c] = true
}
//leetcode submit region end(Prohibit modification and deletion)

console.log(permute([1,2,3]))
console.log(permute([1,2,1,2]))
