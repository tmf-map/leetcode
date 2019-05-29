#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseLinkedList(self, head: ListNode) -> ListNode:
        new_head = None
        while head:
            p = head
            head = head.next
            p.next = new_head
            new_head = p
        return new_head
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        addedHead = current = ListNode(0)
        while l1 and l2:
            current.next = l1
            quotient = (l1.val + l2.val) // 10
            remainder = (l1.val + l2.val) % 10
            if quotient > 0:
                current.val += 1
            l1.val = remainder
            current = current.next
            l1 = l1.next
            l2 = l2.next
        if addedHead.val > 0:
            return self.reverseLinkedList(addedHead)
        return self.reverseLinkedList(addedHead.next)

