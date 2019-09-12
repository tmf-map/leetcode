//给定一个二叉树，判断其是否是一个有效的二叉搜索树。
//
// 假设一个二叉搜索树具有如下特征：
//
//
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
//
//
// 示例 1:
//
// 输入:
//    2
//   / \
//  1   3
//输出: true
//
//
// 示例 2:
//
// 输入:
//    5
//   / \
//  1   4
//     / \
//    3   6
//输出: false
//解释: 输入为: [5,1,4,null,null,3,6]。
//     根节点的值为 5 ，但是其右子节点值为 4 。
//
// Related Topics 树 深度优先搜索

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// var deserialize = function(data) {
//     function deserializeTree (data) {
//         let val = data.shift()
//         if (val === 'null') {
//             return null
//         }
//         let p = new TreeNode(val)
//         p.left = deserializeTree(data)
//         p.right = deserializeTree(data)
//         return p
//     }
//     return deserializeTree(data.split(','))
// };

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     return isValidBSTHelper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
// };
//
// function isValidBSTHelper (node, minVal, maxVal) {
//     if (!node) return true
//     let val = node.val
//     if (val <= minVal || val >= maxVal) {
//         return false
//     }
//     return isValidBSTHelper(node.left, minVal, val)
//         && isValidBSTHelper(node.right, val, maxVal)
// }

var isValidBST = function(root) {
    if (!root) return true;
    let prev;
    let ans = true;
    function inorder (node) {
        if (node) {
            inorder(node.left);
            if (node.val <= prev) {
                ans = false;
                return;
            }
            prev = node.val;
            inorder(node.right);
        }
    }
    inorder(root);
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)

let root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)
// root.left.left = new TreeNode(15)
// root.left.right = new TreeNode(6)

console.log(isValidBST(root))
