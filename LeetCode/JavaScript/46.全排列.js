/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // const arr = [];
  // // arr.push(nums);
  // [...nums]
  // const len = nums.length;
  // for (let i = 0; i < len; i++) {
  //   for (let j = 0; j < len; j++) {
  //     if (i === j) continue;
  //     [nums[j], nums[i]] = [nums[i], nums[j]];
  //     arr.push(nums);
  //     // [...nums];
  //   }
  // }
  // console.log(arr);

  const result = [];
  const temp = [];
  function dfs() {
    if (nums.length === 0) {
      result.push([...temp]); 
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      temp.push(nums[i]);
      nums.splice(i, 1);
      dfs();
      const num = temp.pop();
      nums.splice(i, 0, num);
    }
  }
  dfs();
  return result;

  /**
   * dfs
   */
  // const result = [];
  // const temp = [];
  // function dfs() {
  //   if (nums.length === 0) {
  //     result.push(temp.slice()); // silce 浅拷贝 =》 优于 [...]
  //     return;
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     temp.push(nums[i]);
  //     nums.splice(i, 1);
  //     dfs();
  //     const num = temp.pop();
  //     nums.splice(i, 0, num);
  //   }
  // }
  // dfs();
  // return result;
};

console.log(permute([1, 2, 3]));
// @lc code=end
