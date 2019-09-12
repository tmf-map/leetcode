//给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
//
// 例如，
//
//
//给定二叉搜索树:
//
//        4
//       / \
//      2   7
//     / \
//    1   3
//
//和值: 2
//
//
// 你应该返回如下子树:
//
//
//      2
//     / \
//    1   3
//
//
// 在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。
// Related Topics 树



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
 * @param {number} val
 * @return {TreeNode}
 */
// var searchBST = function(root, val) {
//     if (!root) return null
//     let ans = null
//     function preorder (node) {
//         if (node) {
//             if (node.val === val) {
//                 ans = node
//                 return
//             }
//             if (node.val < val) preorder(node.right)
//             if (node.val > val) preorder(node.left)
//         }
//     }
//     preorder(root)
//     return ans
// };
// var searchBST = function(root, val) {
//     if (!root) return null
//     if (root.val === val) {
//         return root
//     }
//     if (root.val < val) return searchBST(root.right, val)
//     if (root.val > val) return searchBST(root.left, val)
//     return null
// };
var searchBST = function(root, val) {
    while (root) {
        if (root.val === val) {
            return root
        }
        if (root.val > val) {
            root = root.left
        } else {
            root = root.right
        }
    }
    return null
};
//leetcode submit region end(Prohibit modification and deletion)
