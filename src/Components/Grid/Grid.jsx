import React, { useState } from "react";
import "./Grid.css";
import Navbar from "../Navbar/Navbar.jsx";
import Dijkstra from "../../Algorithms/Dijkstra";
import AStar from "../../Algorithms/AStar";
import DFS from "../../Algorithms/DFS";
import BFS from "../../Algorithms/BFS";
import { getShortestPath, animatePath } from "../../Algorithms/ShortestPath";
import Node from "../Node/Node.jsx";

const NUMBER_OF_ROWS =
   window.innerWidth <= 800 ? 20 : Math.floor(window.innerHeight / 25 - 5);
const NUMBER_OF_COLUMNS =
   window.innerWidth <= 800 ? 20 : Math.floor(window.innerWidth / 25 - 5);

let startRow = Math.floor((NUMBER_OF_ROWS - 1) / 2);
let startCol = 2;
let finishRow = Math.floor((NUMBER_OF_ROWS - 1) / 2);
let finishCol = NUMBER_OF_COLUMNS - 3;

export default function Grid() {
   const [nodes, setNodes] = useState(makeInitialGrid());
   const [mouseIsPressed, setMouseIsPressed] = useState(false);
   const [currentAlgorithm, setCurrentAlgorithm] = useState("Dijkstra's");
   const [buttonsLocked, setButtonsLocked] = useState(false);

   const [startIsBeingMoved, setStartIsBeingMoved] = useState(false);
   const [finishIsBeingMoved, setFinishIsBeingMoved] = useState(false);
   console.log(startRow, finishRow);

   const resetPath = () => {
      const newNodes = makeInitialGrid();
      for (let i = 0; i < NUMBER_OF_ROWS; i++)
         for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
            const node = newNodes[i][j];
            const newNode = {
               ...node,
               isWall: nodes[i][j].isWall,
            };
            newNodes[i][j] = newNode;
         }

      setNodes(newNodes);

      for (let i = 0; i < NUMBER_OF_ROWS; i++)
         for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
            if (document.getElementById(i + "," + j).className === "wall")
               continue;
            let className;
            if (i === startRow && j === startCol) className = "start";
            else if (i === finishRow && j === finishCol) className = "finish";
            else className = "unvisited";
            document.getElementById(i + "," + j).className = className;
         }
   };

   const resetGrid = () => {
      if (buttonsLocked) return;
      resetPath();
      for (let i = 0; i < NUMBER_OF_ROWS; i++)
         for (let j = 0; j < NUMBER_OF_COLUMNS; j++)
            if (nodes[i][j].isWall) {
               const newNodes = makeWall(nodes, i, j);
               setNodes(newNodes);
            }
   };

   const handleMouseDown = (row, col) => {
      if (buttonsLocked) return;
      setMouseIsPressed(true);

      if (startRow === row && startCol === col) {
         setStartIsBeingMoved(true);
      } else if (finishRow === row && finishCol === col) {
         setFinishIsBeingMoved(true);
      } else {
         const newNodes = makeWall(nodes, row, col);
         setNodes(newNodes);
      }
   };

   const handleMouseUp = () => {
      setMouseIsPressed(false);
      setStartIsBeingMoved(false);
      setFinishIsBeingMoved(false);
   };

   const handleMouseOver = (row, col) => {
      if (!mouseIsPressed || buttonsLocked) return;
      if (startIsBeingMoved) {
         resetPath();
         const newGrid = moveStart(nodes, row, col);
         setNodes(newGrid);
      } else if (finishIsBeingMoved) {
         resetPath();
         const newGrid = moveFinish(nodes, row, col);
         setNodes(newGrid);
      } else {
         const newNodes = makeWall(nodes, row, col);
         setNodes(newNodes);
      }
   };

   const animateShortestPath = () => {
      if (buttonsLocked) return;
      resetPath();

      const grid = nodes.slice();

      let visitedNodes;
      if (currentAlgorithm === "Dijkstra's")
         visitedNodes = Dijkstra(
            grid,
            grid[startRow][startCol],
            grid[finishRow][finishCol]
         );
      else if (currentAlgorithm === "A*")
         visitedNodes = AStar(
            grid,
            grid[startRow][startCol],
            grid[finishRow][finishCol]
         );
      else if (currentAlgorithm === "DFS")
         visitedNodes = DFS(
            grid,
            grid[startRow][startCol],
            grid[finishRow][finishCol]
         );
      else if (currentAlgorithm === "BFS")
         visitedNodes = BFS(
            grid,
            grid[startRow][startCol],
            grid[finishRow][finishCol]
         );
      else return;

      const shortestPathNodes = getShortestPath(
         grid,
         grid[finishRow][finishCol]
      );
      animatePath(grid, visitedNodes, shortestPathNodes, setButtonsLocked);
   };

   return (
      <>
         <Navbar
            animate={animateShortestPath}
            reset={resetGrid}
            changeAlg={setCurrentAlgorithm}
            currAlg={currentAlgorithm}
         />
         <div className="grid">
            <table>
               <tbody>
                  {nodes.map((currentRow, rowIndex) => {
                     return (
                        <tr id={"row-" + rowIndex} key={rowIndex}>
                           {currentRow.map((node) => {
                              const {
                                 row,
                                 col,
                                 isStart,
                                 isFinish,
                                 isWall,
                              } = node;
                              return (
                                 <Node
                                    handleMouseDown={(row, col) =>
                                       handleMouseDown(row, col)
                                    }
                                    handleMouseUp={() => handleMouseUp()}
                                    handleMouseOver={(row, col) =>
                                       handleMouseOver(row, col)
                                    }
                                    row={row}
                                    col={col}
                                    isStart={isStart}
                                    isFinish={isFinish}
                                    isWall={isWall}
                                    key={col}
                                 />
                              );
                           })}
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </>
   );
}

const makeWall = (grid, row, col) => {
   const newGrid = [...grid];
   const node = newGrid[row][col];
   const newNode = {
      ...node,
      isWall: !node.isWall,
   };
   newGrid[row][col] = newNode;
   return newGrid;
};

const moveStart = (grid, row, col) => {
   const newGrid = [...grid];
   if (row === finishRow && col === finishCol) return newGrid;
   const startNode = newGrid[startRow][startCol];
   const currentNode = newGrid[row][col];

   startRow = row;
   startCol = col;

   // new node but keep the isWall prop
   let newStartNode = createNode(startNode.row, startNode.col);
   newStartNode = {
      ...newStartNode,
      isWall: startNode.isWall,
   };
   newGrid[startNode.row][startNode.col] = newStartNode;

   // new node but keep the isWall prop
   let newNode = createNode(row, col);
   newNode = {
      ...newNode,
      isWall: currentNode.isWall,
   };
   newGrid[row][col] = newNode;

   return newGrid;
};

const moveFinish = (grid, row, col) => {
   const newGrid = [...grid];
   if (row === startRow && col === startCol) return newGrid;
   const finishNode = newGrid[finishRow][finishCol];
   const currentNode = newGrid[row][col];

   finishRow = row;
   finishCol = col;

   // new node but keep the isWall prop
   let newFinishNode = createNode(finishNode.row, finishNode.col);
   newFinishNode = {
      ...newFinishNode,
      isWall: finishNode.isWall,
   };
   newGrid[finishNode.row][finishNode.col] = newFinishNode;

   // new node but keep the isWall prop
   let newNode = createNode(row, col);
   newNode = {
      ...newNode,
      isWall: currentNode.isWall,
   };
   newGrid[row][col] = newNode;

   return newGrid;
};

const makeInitialGrid = () => {
   const grid = [];
   for (let i = 0; i < NUMBER_OF_ROWS; i++) {
      const currentRow = [];
      for (let j = 0; j < NUMBER_OF_COLUMNS; j++)
         currentRow.push(createNode(i, j));
      grid.push(currentRow);
   }
   return grid;
};

const createNode = (row, col) => {
   return {
      row: row,
      col: col,
      isStart: row === startRow && col === startCol,
      isFinish: row === finishRow && col === finishCol,
      isWall: false,
      distance: Infinity,
      previous: null,
   };
};
