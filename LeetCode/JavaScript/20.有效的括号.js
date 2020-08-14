/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // if (s == null || s.length == 0) return true;
  if (s == "") return true;
  const map = { "{": "}", "[": "]", "(": ")" };
  const stack = [];

  for (const i of s) {
    if (map[i]) {
      stack.push(i);
    } else {
      if (stack.length == 0) {
        return false;
      }
      const stackTop = stack[stack.length - 1];
      if (map[stackTop] == i) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length == 0;
};
// @lc code=end
