//给定一个可包含重复数字的序列，返回所有不重复的全排列。
//
// 示例:
//
// 输入: [1,1,2]
//输出:
//[
//  [1,1,2],
//  [1,2,1],
//  [2,1,1]
//]
// Related Topics 回溯算法



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    function backtrack (nums, path) {
        if (!nums.length) {
            ans.push([...path]);
            return;
        }
        let last='';
        for (let i = 0; i < nums.length; i++) {
            //ignore the situation of nums[i-1]==nums[i]
            if(last === nums[i]) continue;
            // 选择该节点
            path.push(nums[i]);
            last = nums[i];
            // 在选择的节点上往下走
            backtrack(nums.slice(0, i).concat(nums.slice(i + 1)), path);
            // 回溯到上个节点
            path.pop();
        }
    }
    backtrack(nums, []);
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(permuteUnique([3,3,0,3]))
