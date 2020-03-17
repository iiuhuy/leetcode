/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
// 解题思路
// 条件: 3.所有字符串中都仅包含小写英文字母 =>
// 可以使用一个 26 位的数组, 保存各个字母在 chars 中出现的次数
// 需要注意索引值是该字符减去字母 a，即 索引值从 ch  - 'a' 开始。
// --- hash map 可以很好解决 参考了 Java 的 --- //
// 1.使用哈希表 unordered_map 分别统计字母表 chars 和词汇表 words 的字母个数，其中 key 值为 26 个字母，value 值是每个字母出现的次数
// 2.检查字母表 chars 中字母出现的次数是否大于等于词汇表 words 中的单词，若单词中的 key 值均在字母表中出现，且次数小于等于字母表中 key 值（该字母）次数，则将该单词的长度加入最终结果中。
var countCharacters = function(words, chars) {
  let result = 0;

  function getCode(str, i) {
    return str.charCodeAt(i) - 97;
  }

  const arr = new Array(26).fill(0);
  for (let i = 0; i < chars.length; i++) {
    arr[getCode(chars, i)]++;
  }

  for (let i = 0; i < words.length; i++) {
    let j = 0;
    while (j < words[i].length) {
      arr[getCode(words[i], j)]--;
      if (arr[getCode(words[i], j)] < 0) {
        break;
      }
      j++;
    }
    if (j === words[i].length) {
      result += words[i].length;
    }

    for (; j >= 0; ) {
      arr[getCode(words[i], j)]++;
      j--;
    }
  }
  return result;
};

console.log(
  countCharacters((words = ["cat", "bt", "hat", "tree"]), (chars = "atach"))
);
// @lc code=end
