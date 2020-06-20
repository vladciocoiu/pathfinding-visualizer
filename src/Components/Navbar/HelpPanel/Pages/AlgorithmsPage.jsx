import React from "react";
import "./AlgorithmsPage.css";

export default function AlgorithmsPage() {
   const algs = [
      {
         name: "Dijkstra's",
         article: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",
         description:
            "Dijkstra's algorithm is the fastest known single-source shortest-path algorithm " +
            "for arbitrary directed graphs ( O(|edges|+|nodes|*log(|nodes|) time complexity if implemented with a min-heap / priority-queue). ",
      },
      {
         name: "A*",
         article: "https://en.wikipedia.org/wiki/A*_search_algorithm",
         description:
            "The A* algorithm is the most popular pathfinding algorithm used in applications such as video games. " +
            "It is generally faster than Dijkstra's algorithm if you can define a function h (heuristic function) that can approximate" +
            " the distance from any node to the finish node in constant time complexity.",
      },
      {
         name: "DFS",
         article: "https://en.wikipedia.org/wiki/Depth-first_search",
         description:
            "The depth-first search algorithm is a graph traversal algorithm that can visit all the nodes in linear time complexity." +
            " It can be implemented iteratively, with a stack, or recursively, using the stack memory.",
      },
      {
         name: "BFS",
         article: "https://en.wikipedia.org/wiki/Breadth-first_search",
         description:
            "The other popular graph traversal algorithm, the breadth-first search can be implemented exactly like DFS, by using a queue instead of a stack. " +
            "It actually is identical to Dijkstra's algorithm in this application, since the distance between two adjacent nodes is always 1.",
      },
   ];

   return (
      <div className="algorithms-page">
         <h2 className="algorithms-page-title">Algorithms</h2>
         {algs.map((alg, index) => (
            <React.Fragment key={index}>
               <a
                  href={alg.article}
                  className={"alg-" + index}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  {alg.name}
               </a>
               <h5 className={"desc-" + index}>{alg.description}</h5>
            </React.Fragment>
         ))}
      </div>
   );
}
