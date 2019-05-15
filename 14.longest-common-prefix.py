#
# @lc app=leetcode id=14 lang=python3
#
# [14] Longest Common Prefix
#
class Solution:
    def longestCommonPrefix(self, strs):
        sz, ret = zip(*strs), ""
        for c in sz:
            if len(set(c)) > 1: break
            ret += c[0]
        return ret

