/**
 * 给你一个整数数组 arr 和一个目标值 target ，请你返回一个整数 value ，使得将数组中所有大于 value 的值变成 value 后，数组的和最接近  target （最接近表示两者之差的绝对值最小）。
 *
 * 如果有多种使得和最接近 target 的方案，请你返回这些整数中的最小值。
 *
 * 请注意，答案不一定是 arr 中的数字。
 *
 * 示例 1：
 *    输入：arr = [4,9,3], target = 10
 *    输出：3
 *    解释：当选择 value 为 3 时，数组会变成 [3, 3, 3]，和为 9 ，这是最接近 target 的方案。
 *
 * 示例 2：
 *    输入：arr = [2,3,5], target = 10
 *    输出：5
 *
 */
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  /**
   * 先排序数组
   * 计算剩余数组平均值
   * 平均值小于当前数，返回平均值
   */
  if (!arr) return 0;

  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = (target - sum) / (arr.length - i);
    if (x < arr[i]) return Math.round(x - 0.1);
    sum += arr[i];
  }
  return arr[arr.length - 1];
};
