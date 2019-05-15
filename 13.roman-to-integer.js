/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numberMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    const sLen = s.length
    let i = 0
    let sum = 0
    while( i < sLen) {
      const current = numberMap[s[i]]
      const next = numberMap[s[i + 1]]
      if (i === sLen -1 || current >= next) {
        sum += current
        i++
      } else {
        sum += next - current
        i += 2
      }
    }
    return sum
};

