/*
 * @lc app=leetcode.cn id=1111 lang=javascript
 *
 * [1111] 有效括号的嵌套深度
 */

// @lc code=start
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  // 题解答案
  // return seq.split("").map((value, index) => index & 1 ^ (value === '('));

  // 0.0
  const result = [];
  for (let i = 0; i < seq.length; i++) {
    result[i] = seq[i] === "(" ? i % 2 : (i + 1) % 2;
  }
  return result;
};
// @lc code=end
