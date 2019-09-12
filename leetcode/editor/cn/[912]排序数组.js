//给定一个整数数组 nums，将该数组升序排列。
//
//
//
//
//
//
// 示例 1：
//
//
//输入：[5,2,3,1]
//输出：[1,2,3,5]
//
//
// 示例 2：
//
//
//输入：[5,1,1,2,0,0]
//输出：[0,0,1,1,2,5]
//
//
//
//
// 提示：
//
//
// 1 <= A.length <= 10000
// -50000 <= A[i] <= 50000
//
//

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // 当被分的数组只剩一个时，退出递归
    if (nums.length <= 1) {
        return nums;
    }
    // 中间基准值的index
    let pivotIndex = ~~(nums.length / 2);
    // 基准值从原数组拿出来
    let pivot = nums.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    // 小的放左边，大的放右边
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    // 递归，把数组合并在一起
    return sortArray(left).concat([pivot], sortArray(right));
};

console.log('', sortArray([5,8,1,7]))
