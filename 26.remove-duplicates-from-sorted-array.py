#
# @lc app=leetcode id=26 lang=python3
#
# [26] Remove Duplicates from Sorted Array
#
class Solution:
    def removeDuplicates(self, nums):
        curr_index = 0
        i = 0
        while curr_index < len(nums) - 1:
            if nums[curr_index] == nums[curr_index + 1]:
                del nums[curr_index]
                curr_index -= 1
            curr_index += 1
            i += 1
        return len(nums)

