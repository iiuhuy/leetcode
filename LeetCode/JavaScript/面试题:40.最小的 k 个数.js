/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 排序
var getLeastNumbers = function(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};

// 堆

// 快排
