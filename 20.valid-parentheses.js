/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const bracketsMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
const lens = s.length
let mid = Math.floor(lens / 2)
for(let i = 0; i < lens; i++) {
  console.log('i', bracketsMap[s[i]])
  if (bracketsMap[s[i]] !== s[lens - 1 - i] || bracketsMap[s[i]] !== s[i + 1]) {
    return false
  }
  console.log('mid', mid)
  if (i + 1 >= mid) {
    return true
  }
}
return true
};

// console.log('()', isValid('()'))
console.log('()[]{}', isValid('()[]{}'))
// console.log('([)]', isValid('([)]'))
// console.log('{[]}', isValid('{[]}'))

