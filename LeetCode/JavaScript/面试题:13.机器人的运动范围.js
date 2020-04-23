/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  let result = 0;
  let obj = {};
  function count(i, j) {
    // 边界直接返回
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    let sum = (i + "" + j).split("").reduce((a, b) => +a + +b);
    let axis = JSON.stringify([i, j]);
    if (sum <= k && !obj[axis]) {
      // 当该点还没走过 和 满足 不大于k 时 继续执行
      result++;
      obj[axis] = true; // 标识该点已经走过, 下次不进
      // 当前的继续 上下左右 走
      count(i + 1, j);
      count(i, j + 1);
      count(i - 1, j);
      count(i, j - 1);
    }
  }
  count(0, 0);

  return result;
};
