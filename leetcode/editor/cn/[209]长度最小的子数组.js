//给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
//
// 示例:
//
// 输入: s = 7, nums = [2,3,1,2,4,3]
//输出: 2
//解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
//
//
// 进阶:
//
// 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
//

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    for (let i = 0; i < nums.length; i++) {
        let sum = s
        for (let j = i; j < nums.length; j++) {
            sum -= nums[j]
            if (sum === 0) {
                return j - i + 1
            }
            if (sum < 0) {
                break
            }
        }
    }
    return 0
};

console.log(7, [2,3,1,2,4,3])
