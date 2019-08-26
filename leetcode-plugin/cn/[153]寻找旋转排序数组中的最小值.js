//假设按照升序排序的数组在预先未知的某个点上进行了旋转。
//
// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
//
// 请找出其中最小的元素。
//
// 你可以假设数组中不存在重复元素。
//
// 示例 1:
//
// 输入: [3,4,5,1,2]
//输出: 1
//
// 示例 2:
//
// 输入: [4,5,6,7,0,1,2]
//输出: 0
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let p1 = 0
    let p2 = nums.length - 1
    // 旋转了0个元素等于不变，直接返回第一个即可
    if (nums[p1] < nums[p2]) {
        return nums[0]
    }
    while (p2 - p1 > 1) {
        let mid = ~~((p2 + p1) / 2)
        if (nums[p1] === nums[p2] && nums[mid] === nums[p1]) {
            return nums.sort((a, b) => a - b)[0]
        }
        console.log('mid', mid)
        console.log('p1', p1)
        // mid在第一个数组
        if (nums[mid] > nums[p1]) {
            p1 = mid
        }
        // mid在第二个数组
        else if (nums[mid] < nums[p2]) {
            p2 = mid
        }
    }
    return nums[p2]
};

console.log('', findMin([1,0,1,1,1]))
