/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let common = ''
  const firstStr = strs[0]
  for(let i = 0; i < firstStr.length; i++) {
    common += firstStr[i]
    for (let s of strs) {
      if (common != s.slice(0, i+1)) {
        return common.slice(0, -1)
      }
    }
  }
  return common
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))

