/**
 * 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。
 * 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。
 */
var kidsWithCandies = function (candies, extraCandies) {
  // let max = 0;
  // for (let i = 0; i < candies.length; i++) {
  //   if (candies[i] > max) {
  //     max = candies[i];
  //   }
  // }
  // for (let j = 0; j < candies.length; j++) {
  //   if (candies[j] + extraCandies >= max) {
  //     candies[j] = true;
  //   } else {
  //     candies[j] = false;
  //   }
  // }
  // return candies;
  const max = Math.max(...candies);
  return candies.map((n) => n + extraCandies >= max);
};
