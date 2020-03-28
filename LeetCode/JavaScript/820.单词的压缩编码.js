/*
 * @lc app=leetcode.cn id=820 lang=javascript
 *
 * [820] 单词的压缩编码
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  words.sort((a, b) => b.length - a.length);
  const map = new Map();
  for (const word of words) {
    const list = map.get(word[word.length - 1]) || [];
    let i = 0;
    while (i < list.length) {
      if (list[i].lastIndexOf(word) === list[i].length - word.length) {
        break;
      }
      i++;
    }
    if (i === list.length) {
      list.push(word);
      map.set(word[word.length - 1], list);
    }
  }
  let result = 0;
  for (const list of map.values()) {
    for (const word of list) {
      result += word.length + 1;
    }
  }
  return result;
  // ----- //
  // const set = new Set(words);
  // for (const word of words) {
  //   for (let i = 1; i < word.length; i++) {
  //     const element = word.slice(i);
  //     set.has(element) && set.delete(element);
  //   }
  // }
  // return [...set].join("#").length + 1;
  // ----- //
  // let arr = words.sort((a, b) => b.length - a.length);
  // let result = "";
  // for (let i = 0; i < words.length; i++) {
  //   if (
  //     result.lastIndexOf(words[i]) !== -1 &&
  //     result[result.lastIndexOf(words[i]) + words[i].length] === "#"
  //   ) {
  //     continue;
  //   } else {
  //     result = result + words[i] + "#";
  //   }
  // }
  // return result.length;
};
// @lc code=end
