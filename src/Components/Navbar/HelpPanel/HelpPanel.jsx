import React, { useState } from "react";
import "../../Grid/Grid.css";
import "./HelpPanel.css";
import NodesPage from "./Pages/NodesPage.jsx";
import AlgorithmsPage from "./Pages/AlgorithmsPage.jsx";
import StartPage from "./Pages/StartPage.jsx";

export default function HelpPanel({ show, setShow }) {
   const [currentPage, setCurrentPage] = useState(0);

   let content;
   if (currentPage === 0) content = <StartPage />;
   if (currentPage === 1) content = <NodesPage />;
   else if (currentPage === 2) content = <AlgorithmsPage />;

   return (
      <div className={"help  " + (show ? "help-show" : "help-hide")}>
         <div className="help-buttons">
            <div className="tabs">
               <div
                  className={
                     "help-page-button start-tab " +
                     (currentPage === 0 ? "active" : "inactive")
                  }
                  onClick={() => setCurrentPage(0)}
               >
                  <h4>Start</h4>
               </div>
               <div
                  className={
                     "help-page-button nodes-tab " +
                     (currentPage === 1 ? "active" : "inactive")
                  }
                  onClick={() => setCurrentPage(1)}
               >
                  <h4>Nodes</h4>
               </div>
               <div
                  className={
                     "help-page-button algorithms-tab " +
                     (currentPage === 2 ? "active" : "inactive")
                  }
                  onClick={() => setCurrentPage(2)}
               >
                  <h4>Algorithms</h4>
               </div>
            </div>

            <div
               className="help-page-button exit-button active"
               onClick={() => setShow(false)}
            >
               <svg className="x" viewBox="0 0 24 24">
                  <path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" />
               </svg>
            </div>
         </div>
         <div className="help-content">{content}</div>
      </div>
   );
}
