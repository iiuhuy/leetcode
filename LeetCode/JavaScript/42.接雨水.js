/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let max = 0;
  let result = 0;
  const leftMax = [];
  const rightMax = [];
  for (let i = 0; i < height.length; i++) {
    leftMax[i] = max = Math.max(height[i], max);
  }
  max = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax[i] = max = Math.max(height[i], max);
  }
  for (let i = 0; i < height.length; i++) {
    result = result + Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return result;

  // let result = 0;
  // let current = 0;
  // const stack = [];
  // while (current < height.length) {
  //     while (stack.length && height[current] > height[stack[stack.length - 1]]) {
  //         const top = stack.pop();
  //         if (stack.length === 0) {
  //             break;
  //         }
  //         const distance = current - stack[stack.length - 1] - 1;
  //         const h = Math.min(height[current], height[stack[stack.length - 1]]) - height[top];
  //         result += distance * h;
  //     }
  //     stack.push(current);
  //     current++;
  // }
  // return result;
};
// @lc code=end
