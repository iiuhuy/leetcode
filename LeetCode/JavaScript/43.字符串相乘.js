/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num1.length;

  const position = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    const n1 = +num1[i];
    for (let j = len2 - 1; j >= 0; j--) {
      const n2 = +num2[j];
      const multi = n1 * n2;
      const sum = position[i + j + 1] + multi;

      position[i + j + 1] = sum % 10;
      position[i + j] += (sum / 10) | 0; // 非零取余数
    }
  }
  // console.log(position);

  let result = position.join("");
  // console.log(result);

  while (result[0] == "0") {
    result = result.substring(1);
  }
  return result.length ? result : "0";
};
// @lc code=end
