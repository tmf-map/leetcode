//给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
//
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
//
// 说明：不允许修改给定的链表。
//
//
//
// 示例 1：
//
// 输入：head = [3,2,0,-4], pos = 1
//输出：tail connects to node index 1
//解释：链表中有一个环，其尾部连接到第二个节点。
//
//
//
//
// 示例 2：
//
// 输入：head = [1,2], pos = 0
//输出：tail connects to node index 0
//解释：链表中有一个环，其尾部连接到第一个节点。
//
//
//
//
// 示例 3：
//
// 输入：head = [1], pos = -1
//输出：no cycle
//解释：链表中没有环。
//
//
//
//
//
//
// 进阶：
//你是否可以不用额外空间解决此题？
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // 1. linkedlist does have cycle
    // 2. cycle length
    // 3. start by distance
    if (!head) {
        return null
    }
    let p = head
    if (hasCycle(p)) {
        let cycleLen = getCycleLen(p)
        let p1 = head
        let p2 = head
        while (cycleLen) {
            p2 = p2.next
            cycleLen--
        }
        while (p1 !== p2) {
            p1 = p1.next
            p2 = p2.next
        }
        return p1
    }
    return null
};

function hasCycle (head) {
    let slow = head
    let fast = head.next
    while (fast && slow !== fast) {
        slow = slow.next
        fast = fast.next.next
    }

}

function getCycleLen () {

}
