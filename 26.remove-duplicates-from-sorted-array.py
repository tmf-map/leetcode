#
# @lc app=leetcode id=26 lang=python3
#
# [26] Remove Duplicates from Sorted Array
#
class Solution:
    def removeDuplicates(self, nums):
        if not nums: return 0
        slow = quick = 0
        while quick < len(nums):
            if nums[slow] == nums[quick]:
                quick += 1
            else:
                slow += 1
                nums[slow] = nums[quick]
                quick += 1
        return slow + 1

