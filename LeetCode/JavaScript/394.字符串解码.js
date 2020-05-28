/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let numStack = []; // 倍数 num 的等待栈
  let strStack = []; // 待拼接的 str 的等待栈
  let num = 0; // 倍数的 “搬运工”
  let result = ""; // 字符串的 “搬运工”
  for (const char of s) {
    // 向右逐字符扫描
    if (!isNaN(char)) {
      // 遇到数字
      num = num * 10 + +char; // js 中 + 可以将数字字符转为数字
    } else if (char === "[") {
      // 入栈的时机
      strStack.push(result); // result 进入 strStack 栈等待
      result = ""; // 完成进栈后 清零
      numStack.push(num); // 倍数 num 进入栈等待
      num = 0; // 完成进栈后 清零
    } else if (char === "]") {
      // 出栈的时机，两个栈的栈顶出栈
      let repeatTimes = numStack.pop(); // 获取拷贝次数
      result = strStack.pop() + result.repeat(repeatTimes); // 构建子串
    } else {
      // 遇到字母，追加给 result 串
      result += char;
    }
  }
  return result;
};
// @lc code=end
