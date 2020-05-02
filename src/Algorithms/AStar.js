export default function AStar(grid, startNode, finishNode) {
   let visitedNodesInOrder = [];
   let discoveredNodes = new Set();
   discoveredNodes.add(startNode);
   startNode.distance = 0;

   // fscore[i][j] represents the current best guess
   // for a path from start to end that goes through grid[i][j]
   let fScore = [];
   for (let i = 0; i < grid.length; i++) {
      fScore[i] = [];
      for (let j = 0; j < grid[i].length; j++) fScore[i][j] = Infinity;
   }
   fScore[startNode.row][startNode.col] = dist(startNode, finishNode);

   while (discoveredNodes.size) {
      const currentNode = bestScore(grid, fScore, discoveredNodes);
      visitedNodesInOrder.push(currentNode);

      if (
         currentNode.row === finishNode.row &&
         currentNode.col === finishNode.col
      )
         return visitedNodesInOrder;

      discoveredNodes.delete(grid[currentNode.row][currentNode.col]);
      updateNeighbours(grid, currentNode, fScore, discoveredNodes, finishNode);
   }
   return visitedNodesInOrder;
}

// this is the distance function used in A*
// it is called Manhattan distance and it represents
// the distance between 2 cells measured along axes at right angles
function dist(a, b) {
   return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}

function bestScore(grid, scores, discoveredNodes) {
   let smallestRow,
      smallestCol,
      minScore = Infinity;
   for (let node of discoveredNodes) {
      const [row, col] = [node.row, node.col];
      if (scores[row][col] === null) continue;
      if (scores[row][col] < minScore) {
         minScore = scores[row][col];
         smallestRow = row;
         smallestCol = col;
      }
   }
   return grid[smallestRow][smallestCol];
}

function updateNeighbours(
   grid,
   currentNode,
   fScore,
   discoveredNodes,
   finishNode
) {
   const dx = [-1, 0, 0, 1];
   const dy = [0, -1, 1, 0];

   // a little trick from Topcoder to access the adjacent nodes
   for (let d = 0; d < 4; d++) {
      const ni = currentNode.row + dx[d];
      const nj = currentNode.col + dy[d];
      if (
         ni < 0 ||
         ni >= grid.length ||
         nj < 0 ||
         nj >= grid[0].length ||
         (grid[ni][nj].isWall &&
            (ni !== finishNode.row || nj !== finishNode.col))
      )
         continue;

      if (currentNode.distance + 1 < grid[ni][nj].distance) {
         grid[ni][nj].distance = currentNode.distance + 1;
         grid[ni][nj].previous = currentNode;
         fScore[ni][nj] =
            grid[ni][nj].distance + dist(grid[ni][nj], finishNode);
         if (!discoveredNodes.has(grid[ni][nj]))
            discoveredNodes.add(grid[ni][nj]);
      }
   }
}
