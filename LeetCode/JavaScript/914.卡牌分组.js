/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  // let x = deck[0];
  // for (i = 1; i < deck.length; i++) {
  //     if (x === deck[i]) {
  //         x = deck[i + 1]
  //         if (x === deck[i + 1]) {
  //             return true
  //         }
  //     }
  // }

  const map = new Map();
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  for (const d of deck) map.set(d, (map.get(d) || 0) + 1);

  const arr = [...map.values()];
  const result = arr.reduce(gcd);

  return result >= 2;
};
// @lc code=end
