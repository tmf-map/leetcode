//给定一个二叉树，返回它的 前序 遍历。
//
// 示例:
//
// 输入: [1,null,2,3]
//   1
//    \
//     2
//    /
//   3
//
//输出: [1,2,3]
//
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let ansRaw = []
    let ans = [[]]
    let queue = [{level: 0, node: root}]
    while (queue.length) {
        let p = queue.shift()
        if (p) {
            ansRaw.push({level: p.level, val: p.node.val})
            p.node.left && queue.push({level: p.level + 1, node: p.node.left})
            p.node.right && queue.push({level: p.level + 1, node: p.node.right})
        }
    }
    ansRaw.forEach(v => {
        if (v.level !== ans.length - 1) {
            ans.push([])
        }
        ans[ans.length - 1].push(v.val)
    })
    return ans
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log('preorderTraversal(root)', preorderTraversal(root))
