import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown.jsx";
import HelpPanel from "./HelpPanel/HelpPanel.jsx";
import "./Navbar.css";

export default function Navbar({ animate, reset, changeAlg, currAlg }) {
   const [helpPressed, setHelpPressed] = useState(true);

   return (
      <nav>
         <HelpPanel show={helpPressed} setShow={setHelpPressed} />
         <div className="title">
            <h2>PATHFINDING VISUALIZER</h2>
         </div>
         <div className="center-button">
            <button className="visualize-button" onClick={() => animate()}>
               {"Visualize " + currAlg}
            </button>
         </div>
         <div className="other-buttons">
            <Dropdown changeAlg={changeAlg} />
            <button className="reset-button" onClick={() => reset()}>
               Reset the grid
            </button>
            <button
               className="help-button"
               onClick={() => setHelpPressed(true)}
            >
               Help
            </button>
         </div>
      </nav>
   );
}
