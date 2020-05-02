export default function Dijkstra(grid, startNode, finishNode) {
   let visitedNodesInOrder = [];

   // start with the first node
   startNode.distance = 0;

   while (true) {
      // find the node with the smallest distance that wasn't already visited
      const currentNode = bestNode(grid);

      if (currentNode === null) return visitedNodesInOrder;
      currentNode.isVisited = true;

      // if the current node is the final node
      if (
         currentNode.row === finishNode.row &&
         currentNode.col === finishNode.col
      )
         return visitedNodesInOrder;

      visitedNodesInOrder.push(currentNode);

      // update the distances of the neighbors of the current node
      updateNeighbours(grid, currentNode);
   }
}

function bestNode(grid) {
   let smallestRow,
      smallestCol,
      minDist = Infinity;
   for (let i = 0; i < grid.length; i++)
      for (let j = 0; j < grid[i].length; j++)
         if (grid[i][j].distance < minDist && !grid[i][j].isVisited) {
            minDist = grid[i][j].distance;
            smallestRow = i;
            smallestCol = j;
         }
   return smallestRow != null && smallestCol != null
      ? grid[smallestRow][smallestCol]
      : null;
}

function updateNeighbours(grid, currentNode) {
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
         grid[ni][nj].isWall
      )
         continue;
      if (currentNode.distance + 1 < grid[ni][nj].distance) {
         grid[ni][nj].distance = currentNode.distance + 1;
         grid[ni][nj].previous = currentNode;
      }
   }
}
