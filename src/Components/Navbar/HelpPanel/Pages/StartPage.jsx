import React from "react";
import "./StartPage.css";

export default function StartPage() {
   const text = [
      "Here you can visualize some pathfinding algorithms, " +
         "using a grid. " +
         "This app is pretty simple and intuitive (I hope) to use. There are 3 steps:",
      "1. Pick an algorithm",
      "2. Create walls and/or move the start and finish nodes",
      "3. Visualize!",
      "I hope you enjoy my app. Good luck!",
   ];

   return (
      <div className="start-page">
         <h2 className="start-page-title">
            Welcome to my pathfinding visualizer!
         </h2>
         {text.map((string, index) => (
            <h5 className={"text-" + index} key={index}>
               {string}
            </h5>
         ))}
      </div>
   );
}
