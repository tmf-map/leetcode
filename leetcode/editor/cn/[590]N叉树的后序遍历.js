//给定一个 N 叉树，返回其节点值的后序遍历。
//
// 例如，给定一个 3叉树 :
//
//
//
//
//
//
//
// 返回其后序遍历: [5,6,3,2,4,1].
//
//
//
// 说明: 递归法很简单，你可以使用迭代法完成此题吗? Related Topics 树



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return [];
    let ans = [];
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        ans.unshift(node.val);
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                stack.push(node.children[i]);
            }
        }
    }
    return ans;
};
// var postorder = function(root) {
//     let ans = [];
//     function post(node) {
//         if (node) {
//             node.children && node.children.forEach(n => post(n));
//             ans.push(node);
//         }
//     }
//     post(root);
//     return ans;
// };
//leetcode submit region end(Prohibit modification and deletion)
