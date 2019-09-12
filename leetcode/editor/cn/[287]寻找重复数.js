//给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
//
// 示例 1:
//
// 输入: [1,3,4,2,2]
//输出: 2
//
//
// 示例 2:
//
// 输入: [3,1,3,4,2]
//输出: 3
//
//
// 说明：
//
//
// 不能更改原数组（假设数组是只读的）。
// 只能使用额外的 O(1) 的空间。
// 时间复杂度小于 O(n2) 。
// 数组中只有一个重复的数字，但它可能不止重复出现一次。
//
// Related Topics 数组 双指针 二分查找



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (nums.length < 2) {
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    nums.sort((a, b) => a - b);
    while (left <= right) {
        let mid = left + (right - left >> 1);
        if (nums[mid] === nums[mid + 1] || nums[mid] === nums[mid - 1]) {
            return nums[mid];
        }
        if (nums[mid] >= mid + 1) {
            left = mid + 1;
        }
        if (nums[mid] < mid + 1) {
            right = mid - 1;
        }
    }
    return -1;
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))
console.log(findDuplicate([1,1,2,3,4]))
console.log(findDuplicate([4,3,1,4,2]))
// 0，1，2，3，4
// 1，2，3，4，4
