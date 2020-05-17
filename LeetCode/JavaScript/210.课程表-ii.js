/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let prelen = prerequisites.length,
    maxNoCircle = (numCourses * (numCourses - 1)) / 2;
  // 当所有点都有边连接时，最大的无环边数
  if (prelen > maxNoCircle) {
    return [];
  }

  let queue = [], // 存储 BFS 待访问节点序列
    flags = [], // 存储节点是否被访问过的标记
    res = [], // 结果
    nodedegree = new Array(numCourses), // 存储 node 的连边总数
    edges = new Array(numCourses); // 存储连边信息，每个元素中存储的数组表示自己的后续课程
  for (let i = 0; i < numCourses; i++) {
    flags[i] = false;
    nodedegree[i] = 0;
    edges[i] = [];
  }

  for (let i = 0; i < prelen; i++) {
    let source = prerequisites[i][0],
      target = prerequisites[i][1];

    edges[target].push(source);
    nodedegree[source]++;
    nodedegree[target]++;
  }

  for (let i = 0; i < numCourses; i++) {
    if (nodedegree[i] === edges[i].length) {
      queue.push(i);
    }
  }

  if (bfsVisit()) {
    return res;
  } else {
    return [];
  }

  function bfsVisit() {
    while (queue.length) {
      let current = queue.shift(), // 当前访问节点
        elen = edges[current].length; // 边数

      res.push(current);
      // console.log(current, res);
      flags[current] = true;
      for (let i = 0; i < elen; i++) {
        let target = edges[current][i];
        if (flags[target]) {
          return false; // 有回路，返回 false
        }
        if (--nodedegree[target] === edges[target].length) {
          queue.push(target);
        }
      }
      edges[current] = [];
      nodedegree[current] -= elen;
    }

    if (res.length < numCourses) {
      return false;
    }
    return true;
  }
};
// @lc code=end
