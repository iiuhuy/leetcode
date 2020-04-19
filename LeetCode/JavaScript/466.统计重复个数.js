/*
 * @lc app=leetcode.cn id=466 lang=javascript
 *
 * [466] 统计重复个数
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
  // 先找循环体，找到后直接计算，留一个循环应对不满足整循环的情况
  let s1_start = -1;
  let s2_index = 0;
  let count1 = 0;
  let count2 = 0;
  while (count1 < n1) {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[s2_index]) {
        if (s2_index === 0) {
          // 判断是否匹配过，若匹配过则找到循环
          if (s1_start === i) {
            let times = Math.floor(n1 / count1);
            count1 = (times - 1) * count1; // 留出一个循环应对不足完整循环的情况
            count2 = (times - 1) * count2;
            s1_start = -2; // 将 s1 标记为已执行过循环
          } else {
            // 如未匹配过，初始化 s1 位置
            if (s1_start === -1) {
              s1_start = i;
            }
          }
        }
        s2_index++;
      }
      if (s2_index === s2.length) {
        s2_index = 0;
        count2++;
      }
    }
    count1++;
  }
  return Math.floor(count2 / n2);
};
// @lc code=end
