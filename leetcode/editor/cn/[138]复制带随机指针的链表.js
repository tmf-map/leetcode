//给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
//
// 要求返回这个链表的深拷贝。
//
//
//
// 示例：
//
//
//
// 输入：
//{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
//
//解释：
//节点 1 的值是 1，它的下一个指针和随机指针都指向节点 2 。
//节点 2 的值是 2，它的下一个指针指向 null，随机指针指向它自己。
//
//
//
//
// 提示：
//
//
// 你必须返回给定头的拷贝作为对克隆列表的引用。
//
// Related Topics 哈希表 链表



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null
    let head2 = new Node(head.val, head.next, head.random)
    let hash = new Map()
    // first traversal
    let p1 = head
    let p2 = head2
    while (p1) {
        hash.set(p1, p2)
        p1 = p1.next
        p2.next = p1 ? new Node(p1.val, p1.next, p1.random) : null
        p2 = p2.next
    }
    // second traversal
    p1 = head
    p2 = head2
    while (p1) {
        p2.random = hash.get(p1.random) || null
        p1 = p1.next
        p2 = p2.next
    }
    return head2
};
//leetcode submit region end(Prohibit modification and deletion)

function Node(val,next,random) {
   this.val = val;
   this.next = next;
   this.random = random;
};

// let link1 = {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
let link2 = {"$id":"1","next":null,"random":null,"val":-1}

// console.log(copyRandomList(link1))
console.log(copyRandomList(link2))
