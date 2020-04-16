/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals || !intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  console.log(intervals, result);

  for (let i = 1; i < intervals.length; i++) {
    if (result[result.length - 1][1] >= intervals[i][0]) {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        intervals[i][1]
      );
    } else {
      result.push(intervals[i]);
    }
  }
  console.log(result);
  return result;
};
merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]);
// @lc code=end
