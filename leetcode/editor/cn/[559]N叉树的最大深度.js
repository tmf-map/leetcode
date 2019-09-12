//给定一个 N 叉树，找到其最大深度。
//
// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
//
// 例如，给定一个 3叉树 :
//
//
//
//
//
//
//
// 我们应返回其最大深度，3。
//
// 说明:
//
//
// 树的深度不会超过 1000。
// 树的节点总不会超过 5000。
// Related Topics 树 深度优先搜索 广度优先搜索



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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    if (root.children) {
        return Math.max(...root.children.map(c => maxDepth(c))) + 1;
    }
    return 1;
};
//leetcode submit region end(Prohibit modification and deletion)

function Node(val,children) {
   this.val = val;
   this.children = children;
};

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);

n1.children = [n3, n2, n4];
n3.children = [n5, n6];

console.log(maxDepth(n1) === 3)
