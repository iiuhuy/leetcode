/*
 * @lc app=leetcode.cn id=945 lang=javascript
 *
 * [945] 使数组唯一的最小增量
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  // A.sort((a, b) => a - b);
  // const queue = [];
  // let move = 0;
  // let prev = A[0] - 1;
  // let i = 0;
  // while (i < A.length) {
  //     if (A[i] === prev) {
  //         queue.push(A[i]);
  //     } else if (A[i] > prev + 1) {
  //         if (queue.length) {
  //             move += prev + 1 - queue.shift();
  //             prev++;
  //             continue;
  //         } else {
  //             prev = A[i];
  //         }
  //     } else {
  //         prev++;
  //     }
  //     i++;
  // }
  // while (queue.length) {
  //     move += prev + 1 - queue.shift();
  //     prev++;
  // }
  // return move;
  // 题解: 
  let move = 0;
  A = A.sort((a, b) => a - b);
  for (let i = 1; i < A.length; i++) {
    if (A[i] <= A[i - 1]) {
      let n = A[i - 1] + 1 - A[i];
      A[i] += n;
      move += n;
    }
  }
  return move;
};
// @lc code=end
