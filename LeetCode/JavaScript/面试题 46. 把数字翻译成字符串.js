/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const str = num.toString();
  const n = str.length;
  let prev = 1;
  let result = 1;
  for (let i = 2; i < n + 1; i++) {
    const temp = Number(str[i - 2] + str[i - 1]);
    if (temp >= 10 && temp <= 25) {
      const t = result; // 缓存上个状态
      result = prev + result; // 当前状态=上上个状态+上个状态
      prev = t; // 更新上上个状态
    } else {
      // result = result
      prev = result; // 这里容易忘了
    }
  }
  return result;
};
