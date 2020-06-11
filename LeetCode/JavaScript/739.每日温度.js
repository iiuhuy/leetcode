/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let returnArr = [];
  T.forEach((item, index) => {
    for (var i = index; i < T.length; i++) {
      if (T[i] > item) {
        returnArr.push(i - index);
        break;
      } else {
        i >= T.length - 1 && returnArr.push(0);
      }
    }
  });
  return returnArr;
};
// @lc code=end
