(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),o=(a(15),a(16),a(5)),s=a(2),c=a(1);a(7),a(17);function u(e){var t=e.changeAlg;return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"dropdown-button"},"Pick an algorithm"),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement("button",{className:"dijkstra",onClick:function(){return t("Dijkstra's")}},"Dijkstra's"),r.a.createElement("button",{className:"a-star",onClick:function(){return t("A*")}},"A*"),r.a.createElement("button",{className:"dfs",onClick:function(){return t("DFS")}},"DFS"),r.a.createElement("button",{className:"bfs",onClick:function(){return t("BFS")}},"BFS")))}a(18),a(19);function h(){return r.a.createElement("div",{className:"nodes-page"},r.a.createElement("h2",{className:"nodes-page-title"},"Nodes"),r.a.createElement("div",{className:"unvisited"}),r.a.createElement("div",{className:"visited"}),r.a.createElement("div",{className:"shortest-path"}),r.a.createElement("div",{className:"wall"}),r.a.createElement("div",{className:"start-and-finish"},r.a.createElement("svg",{viewBox:"0 0 16 16",className:"start-icon"},r.a.createElement("path",{d:"M15.375,7L10,2.54C9.695,2.287,9.461,2,9,2C8.375,2,8,2.516,8,3v3H1C0.45,6,0,6.45,0,7v2c0,0.55,0.45,1,1,1h7v3  c0,0.484,0.375,1,1,1c0.461,0,0.695-0.287,1-0.54L15.375,9C15.758,8.688,16,8.445,16,8S15.758,7.313,15.375,7z"})),r.a.createElement("svg",{className:"finish-icon",viewBox:"0 0 365.696 365.696"},r.a.createElement("path",{d:"m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"}))),["An unvisited node. The algorithm never considered it for its path.","A visited node. The algorithm checked it, but it wasn't good enough to be a part of the path.","A path node. The algorithm chose this as one of the nodes that represent the path.","A wall. The path cannot go through it and the algorithm ignores it. You can turn nodes into walls / remove walls by clicking on them.","The start and finish nodes. They represent the extremities of the path. You can drag them around in order to change their positions."].map((function(e,t){return r.a.createElement("h5",{className:"desc-"+t,key:t},e)})))}a(20);function m(){return r.a.createElement("div",{className:"algorithms-page"},r.a.createElement("h2",{className:"algorithms-page-title"},"Algorithms"),[{name:"Dijkstra's",article:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",description:"Dijkstra's algorithm is the fastest known single-source shortest-path algorithm for arbitrary directed graphs. "},{name:"A*",article:"https://en.wikipedia.org/wiki/A*_search_algorithm",description:"The A* algorithm is the most popular pathfinding algorithm used in many applications such as video games. It is generally faster than Dijkstra's algorithm but it can't be used in every situation."},{name:"DFS",article:"https://en.wikipedia.org/wiki/Depth-first_search",description:"The depth-first search algorithm is a graph traversal algorithm that can visit all the nodes in linear time complexity, but it doesn't always find the shortest path."},{name:"BFS",article:"https://en.wikipedia.org/wiki/Breadth-first_search",description:"The other popular graph traversal algorithm, the breadth-first search also doesn't always find the shortest path, but it is identical to Dijkstra's algorithm in this application, since the distance between two adjacent nodes is always 1."}].map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("a",{href:e.article,className:"alg-"+t,target:"_blank",rel:"noopener noreferrer"},e.name),r.a.createElement("h5",{className:"desc-"+t},e.description))})))}a(21);function d(){return r.a.createElement("div",{className:"start-page"},r.a.createElement("h2",{className:"start-page-title"},"Welcome to my pathfinding visualizer!"),["Here you can visualize some pathfinding algorithms, using a grid. This app is pretty simple and intuitive (I hope) to use. There are 3 steps:","1. Pick an algorithm","2. Create walls and/or move the start and finish nodes","3. Visualize!","I hope you enjoy my app. Good luck!"].map((function(e,t){return r.a.createElement("h5",{className:"text-"+t,key:t},e)})))}function f(e){var t,a=e.show,i=e.setShow,l=Object(n.useState)(0),o=Object(c.a)(l,2),s=o[0],u=o[1];return 0===s&&(t=r.a.createElement(d,null)),1===s?t=r.a.createElement(h,null):2===s&&(t=r.a.createElement(m,null)),r.a.createElement("div",{className:"help  "+(a?"help-show":"help-hide")},r.a.createElement("div",{className:"help-buttons"},r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"help-page-button start-tab "+(0===s?"active":"inactive"),onClick:function(){return u(0)}},r.a.createElement("h4",null,"Start")),r.a.createElement("div",{className:"help-page-button nodes-tab "+(1===s?"active":"inactive"),onClick:function(){return u(1)}},r.a.createElement("h4",null,"Nodes")),r.a.createElement("div",{className:"help-page-button algorithms-tab "+(2===s?"active":"inactive"),onClick:function(){return u(2)}},r.a.createElement("h4",null,"Algorithms"))),r.a.createElement("div",{className:"help-page-button exit-button active",onClick:function(){return i(!1)}},r.a.createElement("svg",{className:"x",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"})))),r.a.createElement("div",{className:"help-content"},t))}a(22);function v(e){var t=e.animate,a=e.reset,i=e.changeAlg,l=e.currAlg,o=Object(n.useState)(!0),s=Object(c.a)(o,2),h=s[0],m=s[1];return r.a.createElement("nav",null,r.a.createElement(f,{show:h,setShow:m}),r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"PATHFINDING VISUALIZER")),r.a.createElement("div",{className:"center-button"},r.a.createElement("button",{className:"visualize-button",onClick:function(){return t()}},"Visualize "+l)),r.a.createElement("div",{className:"other-buttons"},r.a.createElement(u,{changeAlg:i}),r.a.createElement("button",{className:"reset-button",onClick:function(){return a()}},"Reset the grid"),r.a.createElement("button",{className:"help-button",onClick:function(){return m(!0)}},"Help")))}function p(e){for(var t,a,n=1/0,r=0;r<e.length;r++)for(var i=0;i<e[r].length;i++)e[r][i].distance<n&&!e[r][i].isVisited&&(n=e[r][i].distance,t=r,a=i);return null!=t&&null!=a?e[t][a]:null}function g(e,t){for(var a=[-1,0,0,1],n=[0,-1,1,0],r=0;r<4;r++){var i=t.row+a[r],l=t.col+n[r];i<0||i>=e.length||l<0||l>=e[0].length||e[i][l].isWall||t.distance+1<e[i][l].distance&&(e[i][l].distance=t.distance+1,e[i][l].previous=t)}}var w=a(9);function E(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)}function b(e,t,a){var n,r,i,l=1/0,o=Object(w.a)(a);try{for(o.s();!(i=o.n()).done;){var s=i.value,c=[s.row,s.col],u=c[0],h=c[1];null!==t[u][h]&&(t[u][h]<l&&(l=t[u][h],n=u,r=h))}}catch(m){o.e(m)}finally{o.f()}return e[n][r]}function N(e,t,a,n,r){for(var i=[-1,0,0,1],l=[0,-1,1,0],o=0;o<4;o++){var s=t.row+i[o],c=t.col+l[o];s<0||s>=e.length||c<0||c>=e[0].length||e[s][c].isWall&&(s!==r.row||c!==r.col)||t.distance+1<e[s][c].distance&&(e[s][c].distance=t.distance+1,e[s][c].previous=t,a[s][c]=e[s][c].distance+E(e[s][c],r),n.has(e[s][c])||n.add(e[s][c]))}}function k(e,t,a,n,r){for(var i=[1,0,0,-1],l=[0,1,-1,0],o=0;o<4;o++){var s=t.row+i[o],c=t.col+l[o];s<0||s>=e.length||c<0||c>=e[0].length||e[s][c].isWall&&(s!==n.row||c!==n.col)||a.has(e[s][c])||(e[s][c].previous=t,r.push(e[s][c]))}}function j(e,t,a,n,r){for(var i=[-1,0,0,1],l=[0,-1,1,0],o=0;o<4;o++){var s=t.row+i[o],c=t.col+l[o];s<0||s>=e.length||c<0||c>=e[0].length||e[s][c].isWall&&(s!==n.row||c!==n.col)||a.has(e[s][c])||(a.add(e[s][c]),e[s][c].previous=t,r.push(e[s][c]))}}function y(e){var t=e.handleMouseDown,a=e.handleMouseUp,n=e.handleMouseOver,i=e.row,l=e.col,o=e.isStart,s=e.isFinish,c=e.isWall;return r.a.createElement("td",{id:i+","+l,className:o?"start":s?"finish":c?"wall":"unvisited",onMouseDown:function(){return t(i,l)},onMouseUp:function(){return a()},onMouseOver:function(){return n(i,l)}},o?r.a.createElement("svg",{viewBox:"0 0 16 16",className:"start-icon"},r.a.createElement("path",{d:"M15.375,7L10,2.54C9.695,2.287,9.461,2,9,2C8.375,2,8,2.516,8,3v3H1C0.45,6,0,6.45,0,7v2c0,0.55,0.45,1,1,1h7v3  c0,0.484,0.375,1,1,1c0.461,0,0.695-0.287,1-0.54L15.375,9C15.758,8.688,16,8.445,16,8S15.758,7.313,15.375,7z"})):s?r.a.createElement("svg",{className:"finish-icon",viewBox:"0 0 365.696 365.696"},r.a.createElement("path",{d:"m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"})):void 0)}var S=window.innerWidth<=800?20:Math.floor(window.innerHeight/25-5),O=window.innerWidth<=800?20:Math.floor(window.innerWidth/25-5),W=Math.floor((S-1)/2),A=2,C=Math.floor((S-1)/2),M=O-3;function D(){var e=Object(n.useState)(F()),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(!1),o=Object(c.a)(l,2),u=o[0],h=o[1],m=Object(n.useState)("Dijkstra's"),d=Object(c.a)(m,2),f=d[0],w=d[1],D=Object(n.useState)(!1),z=Object(c.a)(D,2),I=z[0],x=z[1],H=Object(n.useState)(!1),_=Object(c.a)(H,2),V=_[0],U=_[1],P=Object(n.useState)(!1),G=Object(c.a)(P,2),J=G[0],R=G[1],Y=function(){for(var e=F(),t=0;t<S;t++)for(var n=0;n<O;n++){var r=e[t][n],l=Object(s.a)({},r,{isWall:a[t][n].isWall});e[t][n]=l}i(e);for(var o=0;o<S;o++)for(var c=0;c<O;c++)if("wall"!==document.getElementById(o+","+c).className){var u=void 0;u=o===W&&c===A?"start":o===C&&c===M?"finish":"unvisited",document.getElementById(o+","+c).className=u}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{animate:function(){if(!I){Y();var e,t=a.slice();if("Dijkstra's"===f)e=function(e,t,a){var n=[];for(t.distance=0;;){var r=p(e);if(null===r)return n;if(r.isVisited=!0,r.row===a.row&&r.col===a.col)return n;n.push(r),g(e,r)}}(t,t[W][A],t[C][M]);else if("A*"===f)e=function(e,t,a){var n=[],r=new Set;r.add(t),t.distance=0;for(var i=[],l=0;l<e.length;l++){i[l]=[];for(var o=0;o<e[l].length;o++)i[l][o]=1/0}for(i[t.row][t.col]=E(t,a);r.size;){var s=b(e,i,r);if(n.push(s),s.row===a.row&&s.col===a.col)return n;r.delete(e[s.row][s.col]),N(e,s,i,r,a)}return n}(t,t[W][A],t[C][M]);else if("DFS"===f)e=function(e,t,a){for(var n=new Set,r=[],i=[t];i.length;){var l=i.pop();if(r.push(l),n.add(l),l.row===a.row&&l.col===a.col)return r;k(e,l,n,a,i)}return r}(t,t[W][A],t[C][M]);else{if("BFS"!==f)return;e=function(e,t,a){for(var n=new Set,r=[],i=[t];i.length;){var l=i.shift();if(r.push(l),n.add(l),l.row===a.row&&l.col===a.col)return r;j(e,l,n,a,i)}return r}(t,t[W][A],t[C][M])}!function(e,t,a,n){n(!0);for(var r=function(e){setTimeout((function(){var a=t[e];document.getElementById(a.row+","+a.col).className="visited"}),5*e)},i=0;i<t.length;i++)r(i);setTimeout((function(){for(var e=function(e){setTimeout((function(){var t=a[e];document.getElementById(t.row+","+t.col).className="shortest-path"}),25*e)},t=0;t<a.length;t++)e(t)}),5*t.length),setTimeout((function(){return n(!1)}),5*t.length+25*a.length)}(0,e,function(e,t){if(null===t.previous)return[];for(var a=[],n=t;null!=n;)a.unshift(n),n=n.previous;return a}(0,t[C][M]),x)}},reset:function(){if(!I){Y();for(var e=0;e<S;e++)for(var t=0;t<O;t++)if(a[e][t].isWall){var n=L(a,e,t);i(n)}}},changeAlg:w,currAlg:f}),r.a.createElement("div",{className:"grid"},r.a.createElement("table",null,r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{id:"row-"+t,key:t},e.map((function(e){var t=e.row,n=e.col,l=e.isStart,o=e.isFinish,s=e.isWall;return r.a.createElement(y,{handleMouseDown:function(e,t){return function(e,t){if(!I)if(h(!0),W===e&&A===t)U(!0);else if(C===e&&M===t)R(!0);else{var n=L(a,e,t);i(n)}}(e,t)},handleMouseUp:function(){return h(!1),U(!1),void R(!1)},handleMouseOver:function(e,t){return function(e,t){if(u&&!I)if(V){Y();var n=B(a,e,t);i(n)}else if(J){Y();var r=T(a,e,t);i(r)}else{var l=L(a,e,t);i(l)}}(e,t)},row:t,col:n,isStart:l,isFinish:o,isWall:s,key:n})})))}))))))}var L=function(e,t,a){var n=Object(o.a)(e),r=n[t][a],i=Object(s.a)({},r,{isWall:!r.isWall});return n[t][a]=i,n},B=function(e,t,a){var n=Object(o.a)(e);if(t===C&&a===M)return n;var r=n[W][A],i=n[t][a];W=t,A=a;var l=z(r.row,r.col);l=Object(s.a)({},l,{isWall:r.isWall}),n[r.row][r.col]=l;var c=z(t,a);return c=Object(s.a)({},c,{isWall:i.isWall}),n[t][a]=c,n},T=function(e,t,a){var n=Object(o.a)(e);if(t===W&&a===A)return n;var r=n[C][M],i=n[t][a];C=t,M=a;var l=z(r.row,r.col);l=Object(s.a)({},l,{isWall:r.isWall}),n[r.row][r.col]=l;var c=z(t,a);return c=Object(s.a)({},c,{isWall:i.isWall}),n[t][a]=c,n},F=function(){for(var e=[],t=0;t<S;t++){for(var a=[],n=0;n<O;n++)a.push(z(t,n));e.push(a)}return e},z=function(e,t){return{row:e,col:t,isStart:e===W&&t===A,isFinish:e===C&&t===M,isWall:!1,distance:1/0,previous:null}};var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.9cc0a560.chunk.js.map