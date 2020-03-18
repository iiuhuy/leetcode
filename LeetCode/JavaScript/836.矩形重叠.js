/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// 方法一：检查位置-逆向思维
// var isRectangleOverlap = function (rec1, rec2) {
//     return !(
//         rec1[2] <= rec2[0]
//         || rec1[3] <= rec2[1]
//         || rec1[0] >= rec2[2]
//         || rec1[1] >= rec2[3]
//     )
// };
// 方法二：检查区域-正向思维
var isRectangleOverlap = function(rec1, rec2) {
  return (
    Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) &&
    Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1])
  );
};
// @lc code=end
