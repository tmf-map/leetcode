#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#
class Solution:
    def isValid(self, s):
        bracketsMap = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
        stack = []
        for v in s:
            if v in '([{':
                stack.append(v)
            elif len(stack) > 0 and bracketsMap[stack[-1]] == v:
                stack.pop()
            else:
                return False
        return len(stack) == 0

# s = Solution()
# print('[', s.isValid('['))
# print(']', s.isValid(']'))
# print('(])', s.isValid('(])'))
# print('()', s.isValid('()'))
# print('()', s.isValid('()[]{}'))
# print('([)]', s.isValid('([)]'))
# print('{[]}', s.isValid('{[]}'))
