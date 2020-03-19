/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindrome = function (s) {
//     const map = new Map()
//     let max = 0
//     for (let char of s) {
//         if (!map.has(char)) {
//             map.set(char, 1)
//         } else {
//             map.set(char, map.get(char) + 1)
//         }

//         if (map.get(char) == 2) {
//             max += 2
//             map.set(char, 0)
//         }
//     }

//     return max == s.length ? max : max + 1
// };
// longestPalindrome("abccccdd")
var longestPalindrome = function(s) {
  const arr = new Array(128).fill(0);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const n = s.charCodeAt(i);
    arr[n]++;
    if (arr[n] >= 2) {
      result += 2;
      arr[n] -= 2;
    }
  }
  return result + (arr.indexOf(1) === -1 ? 0 : 1);
};
// @lc code=end
