/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p == "" || !p) {
    return s == "";
  }
  // 判断 s 是否为空 防止越界，如果 s 为空，表达式直接为 false , s.charAt(0) 就不会执行了
  var first_match = s && (p.charAt(0) == s.charAt(0) || p.charAt(0) == ".");
  // 当长度大于2的时候，才考虑 *
  // ---两种情况
  //p 直接跳过两个字符，表示  * 前边的字符出现 0 次
  //p 不变，接着用第一个字符和前面比较，表示 * 用前一个字符替代 【s = aa , p = a*】
  if (p.length >= 2 && p.charAt(1) == "*") {
    return (
      isMatch(s, p.substring(2)) || (first_match && isMatch(s.substring(1), p))
    );
  } else {
    return first_match && isMatch(s.substring(1), p.substring(1));
  }
};
// @lc code=end
