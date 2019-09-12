//给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
//
// 你的算法时间复杂度必须是 O(log n) 级别。
//
// 如果数组中不存在目标值，返回 [-1, -1]。
//
// 示例 1:
//
// 输入: nums = [5,7,7,8,8,10], target = 8
//输出: [3,4]
//
// 示例 2:
//
// 输入: nums = [5,7,7,8,8,10], target = 6
//输出: [-1,-1]
// Related Topics 数组 二分查找



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length < 1) return [-1, -1]
    let left = getFirstTarget(nums, target)
    let right = getLastTarget(nums, target)
    return [left, right]
};

function getFirstTarget (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + (right - left >> 1)
        if (nums[mid] === target) {
            if (nums[mid - 1] !== target) {
                return mid
            }
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return -1
}
function getLastTarget (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + (right - left >> 1)
        if (nums[mid] === target) {
            if (nums[mid + 1] !== target) {
                return mid
            }
            left = mid + 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return -1
}
//leetcode submit region end(Prohibit modification and deletion)

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([1], 0))
console.log(searchRange([2,2], 0))
console.log(searchRange([1], 1))
