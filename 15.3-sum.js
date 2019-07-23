/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (24.32%)
 * Likes:    4074
 * Dislikes: 466
 * Total Accepted:    588.4K
 * Total Submissions: 2.4M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length;
  if (len < 3) {
    return [];
  }
  // 先进行升序排序
  nums.sort((a, b) => a - b)
  let result = [];
  for (let i = 0; i < len - 2; i++) {
    // 如果当前元素和前一个元素重复，则没必要再比，因为前一个是超集，都比过了
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let lo = i + 1;
    let hi = len - 1;
    let target = -nums[i];
    while (lo < hi) {
      let sum = nums[lo] + nums[hi];
      if (sum > target) {
        hi--;
      }
      if (sum < target) {
        lo++;
      }
      if (sum === target) {
        // 如果lo不是初始的lo，且和上一次lo值相等，则表示已经比过了，跳过，注意lo++
        if (lo > i + 1 && nums[lo] === nums[lo - 1]) {
          lo++;
          continue;
        }
        result.push([nums[i], nums[lo], nums[hi]]);
        // 找到符合条件的，还要继续比
        lo++;
      }
    }
  }
  return result;
};

