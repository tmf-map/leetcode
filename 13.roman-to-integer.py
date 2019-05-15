#
# @lc app=leetcode id=13 lang=python3
#
# [13] Roman to Integer
#
class Solution:
    def romanToInt(self, s: str) -> int:
        numberMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        sLen = len(s)
        i = 0
        sum = 0
        while i < sLen:
            current = numberMap[s[i]]
            if i < sLen -1:
                next = numberMap[s[i + 1]]
            if i == sLen -1 or current >= next:
                sum += current
                i += 1
            else:
                sum += next - current
                i += 2
        return sum
