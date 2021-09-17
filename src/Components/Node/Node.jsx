import React, { useState } from "react";

export default function Node(props) {
   const {
      handleMouseDown,
      handleMouseUp,
      handleMouseOver,
      row,
      col,
      isStart,
      isFinish,
      isWall,
   } = props;

   const [canChange, setCanChange] = useState(true);

   const getClassName = () => {
      if (isStart) return "start";
      else if (isFinish) return "finish";
      else if (isWall) return "wall";
      else return "unvisited";
   };

   const getIcon = () => {
      if (isStart)
         return (
            <svg viewBox="0 0 16 16" className="start-icon">
               <path d="M15.375,7L10,2.54C9.695,2.287,9.461,2,9,2C8.375,2,8,2.516,8,3v3H1C0.45,6,0,6.45,0,7v2c0,0.55,0.45,1,1,1h7v3  c0,0.484,0.375,1,1,1c0.461,0,0.695-0.287,1-0.54L15.375,9C15.758,8.688,16,8.445,16,8S15.758,7.313,15.375,7z" />
            </svg>
         );
      else if (isFinish)
         return (
            <svg className="finish-icon" viewBox="0 0 365.696 365.696">
               <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
            </svg>
         );
      else return;
   };

   return (
      <td
         id={row + "," + col}
         className={getClassName()}
         onMouseDown={() => handleMouseDown(row, col)}
         onMouseUp={handleMouseUp}
         onMouseOver={() => handleMouseOver(row, col, canChange, setCanChange)}
      >
         {getIcon()}
      </td>
   );
}
