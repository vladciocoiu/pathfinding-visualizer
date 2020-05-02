export function animatePath(
   grid,
   visitedNodesInOrder,
   shortestPathNodes,
   setButtonsLocked
) {
   // lock the buttons
   setButtonsLocked(true);

   // animate the visited nodes
   for (let i = 0; i < visitedNodesInOrder.length; i++) {
      setTimeout(() => {
         const node = visitedNodesInOrder[i];
         document.getElementById(node.row + "," + node.col).className =
            "visited";
      }, 5 * i);
   }

   // wait until the visited nodes finished animating, and then animate the path
   setTimeout(() => {
      for (let i = 0; i < shortestPathNodes.length; i++) {
         setTimeout(() => {
            const node = shortestPathNodes[i];
            document.getElementById(node.row + "," + node.col).className =
               "shortest-path";
         }, 25 * i);
      }
   }, 5 * visitedNodesInOrder.length);

   // unlock the buttons
   setTimeout(
      () => setButtonsLocked(false),
      5 * visitedNodesInOrder.length + 25 * shortestPathNodes.length
   );
}

export function getShortestPath(grid, finishNode) {
   if (finishNode.previous === null) return [];

   let shortestPathNodes = [];
   let currentNode = finishNode;
   while (currentNode != null) {
      shortestPathNodes.unshift(currentNode);
      currentNode = currentNode.previous;
   }
   return shortestPathNodes;
}
