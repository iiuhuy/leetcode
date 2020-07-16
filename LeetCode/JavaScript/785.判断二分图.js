/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  /* bfs + 染色法 */
  const colors = new Array(graph.length).fill(0); // 用于存储染色信息的数组，0 表示未染色，1 表示染成红色，2 表示染成绿色

  for (let i = 0; i < graph.length; i++) {
    if (!colors[i]) {
      // 判断是否被染色，如已染色说明此处已被遍历过了，跳过
      let queue = [i]; // 使用队列存储需要被染色的节点下标
      colors[i] = 1; // 初始化第一个的颜色为红色
      while (queue.length) {
        // 通过队列的长度来判断是否结束循环
        const key = queue.shift();
        const color = colors[key] === 1 ? 2 : 1; // 记录下该节点的下个节点应该为什么颜色
        for (const item of graph[key]) {
          // 遍历该节点所有与之相连的节点
          if (colors[item]) {
            // 如果该节点已被染色，则判断该颜色是否与记录下的颜色一样，不一样则 return false
            if (colors[item] !== color) return false;
          } else {
            // 如果未被染色，则将其染色，并将其添加进队列中
            colors[item] = color;
            queue.push(item);
          }
        }
      }
    }
  }
  return true;
};
// @lc code=end
