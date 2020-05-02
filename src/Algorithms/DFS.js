export default function DFS(grid, startNode, finishNode) {
   let visitedSet = new Set();

   let visitedNodesInOrder = [];
   let stack = [startNode];

   while (stack.length) {
      const currentNode = stack.pop();

      visitedNodesInOrder.push(currentNode);
      visitedSet.add(currentNode);

      if (
         currentNode.row === finishNode.row &&
         currentNode.col === finishNode.col
      )
         return visitedNodesInOrder;

      updateNeighbours(grid, currentNode, visitedSet, finishNode, stack);
   }

   return visitedNodesInOrder;
}

function updateNeighbours(grid, currentNode, visitedNodes, finishNode, stack) {
   const dx = [1, 0, 0, -1];
   const dy = [0, 1, -1, 0];

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
            (ni !== finishNode.row || nj !== finishNode.col)) ||
         visitedNodes.has(grid[ni][nj])
      )
         continue;

      grid[ni][nj].previous = currentNode;
      stack.push(grid[ni][nj]);
   }
}
