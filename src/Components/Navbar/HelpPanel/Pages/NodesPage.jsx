import React from "react";
import "./NodesPage.css";

export default function NodesPage() {
   const desc = [
      "An unvisited node. The algorithm never considered that node for its path.",
      "A visited node. The algorithm checked it, but it wasn't good enough to be a part of the path.",
      "A path node. The algorithm chose this as one of the nodes that represent the path.",
      "A wall. The path cannot go through it and the algorithm ignores it. You can turn nodes into walls / remove walls by clicking on them.",
      "The start and finish nodes. They represent the extremities of the path. You can drag them around in order to change their positions.",
   ];

   return (
      <div className="nodes-page">
         <h2 className="nodes-page-title">Nodes</h2>
         <div className="unvisited"></div>
         <div className="visited"></div>
         <div className="shortest-path"></div>
         <div className="wall"></div>
         <div className="start-and-finish">
            <svg viewBox="0 0 16 16" className="start-icon">
               <path d="M15.375,7L10,2.54C9.695,2.287,9.461,2,9,2C8.375,2,8,2.516,8,3v3H1C0.45,6,0,6.45,0,7v2c0,0.55,0.45,1,1,1h7v3  c0,0.484,0.375,1,1,1c0.461,0,0.695-0.287,1-0.54L15.375,9C15.758,8.688,16,8.445,16,8S15.758,7.313,15.375,7z" />
            </svg>
            <svg className="finish-icon" viewBox="0 0 365.696 365.696">
               <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
            </svg>
         </div>
         {desc.map((text, index) => (
            <h5 className={"desc-" + index} key={index}>
               {text}
            </h5>
         ))}
      </div>
   );
}
