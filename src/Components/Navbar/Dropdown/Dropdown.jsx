import React from "react";
import "./Dropdown.css";

export default function Dropdown({ changeAlg }) {
   return (
      <div className="dropdown">
         <button className="dropdown-button">Pick an algorithm</button>
         <div className="dropdown-content">
            <button
               className="dijkstra"
               onClick={() => changeAlg("Dijkstra's")}
            >
               Dijkstra's
            </button>
            <button className="a-star" onClick={() => changeAlg("A*")}>
               A*
            </button>
            <button className="dfs" onClick={() => changeAlg("DFS")}>
               DFS
            </button>
            <button className="bfs" onClick={() => changeAlg("BFS")}>
               BFS
            </button>
         </div>
      </div>
   );
}
