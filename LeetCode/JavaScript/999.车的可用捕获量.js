/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 车的可用捕获量
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  // let count = 0, start = 0, end = 0;
  // const dx = [0, 1, 0, -1];
  // const dy = [1, 0, -1, 0];
  // for (let i = 0; i < 8; ++i) {
  //     for (let j = 0; j < 8; ++j) {
  //         if (board[i][j] == 'R') {
  //             start = i;
  //             end = j;
  //             break;
  //         }
  //     }
  // }
  // for (let i = 0; i < 4; ++i) {
  //     for (let step = 0; ; ++step) {
  //         const tx = start + step * dx[i];
  //         const ty = end + step * dy[i];
  //         if (tx < 0 || tx >= 8 || ty < 0 || ty >= 8 || board[tx][ty] == 'B') break;
  //         if (board[tx][ty] == 'p') {
  //             count++;
  //             break;
  //         }
  //     }
  // }
  // return count;

  let result = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        for (let di = i; di >= 0; di--) {
          if (board[di][j] === "p") {
            result++;
            break;
          } else if (board[di][j] === "B") {
            break;
          }
        }
        for (let di = i; di < board.length; di++) {
          if (board[di][j] === "p") {
            result++;
            break;
          } else if (board[di][j] === "B") {
            break;
          }
        }
        for (let dj = j; dj >= 0; dj--) {
          if (board[i][dj] === "p") {
            result++;
            break;
          } else if (board[i][dj] === "B") {
            break;
          }
        }
        for (let dj = j; dj < board[i].length; dj++) {
          if (board[i][dj] === "p") {
            result++;
            break;
          } else if (board[i][dj] === "B") {
            break;
          }
        }
      }
    }
  }
  return result;
};
// @lc code=end
