/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12 || s.length < 4) return res;
  if (arr.length == 4 && start == s.length) res.push(arr.join("."));
  for (let i = start; i < s.length; i++) {
    let str = s.substring(start, i + 1);
    let strToNum = str - 0;
    // strToNum > 255 ==> 数字大小不能大于255
    // str != strToNum + "" ==> 除去以零开头的大于两位数的值，比如 010，011
    if (strToNum > 255 || str != strToNum + "") break;
    arr.push(str);
    restoreIpAddresses(s, res, arr, i + 1);
    arr.pop();
  }
  return res;
};
// @lc code=end
