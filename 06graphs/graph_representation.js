/* 
    2 - 0
   / \
  1 - 3
*/

// _____Edge List:
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// _____Adjacent List:
// (normal)
const graph2 = [[2], [2, 3], [0, 3, 1], [1, 2]];
//               0      1        2        3 ... conecta con

// (hash table)
const graph3 = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [2, 1],
};

// _____Adjacent Matrix:
// (arrays)
const graph4 = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

// (object)
const graph5 = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
