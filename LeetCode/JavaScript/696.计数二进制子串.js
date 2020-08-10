/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  // 时间和空间复杂度都是 O(n)
  // const counts = Array(50000).fill(0);
  // const number = s.length;
  // let pointer = 0;
  // while (pointer < number) {
  //   const chr = s.charAt(pointer);
  //   let count = 0;
  //   while (pointer < number && s.charAt(pointer) === chr) {
  //     ++pointer;
  //     ++count;
  //   }
  //   counts.push(count);
  // }
  // let result = 0;
  // for (let i = 1; i < counts.length; ++i) {
  //   result += Math.min(counts[i], counts[i - 1]);
  // }
  // return result;
  // -------------------------------------------------------------//
  // 时间复杂度：O(n)
  // 空间复杂度：O(1)
  const number = s.length;
  let pointer = 0;
  let last = 0;
  let result = 0;
  while (pointer < number) {
    const c = s.charAt(pointer);
    let count = 0;
    while (pointer < number && s.charAt(pointer) === c) {
      ++pointer;
      ++count;
    }
    result += Math.min(count, last);
    last = count;
  }
  return result;
};
// @lc code=end
