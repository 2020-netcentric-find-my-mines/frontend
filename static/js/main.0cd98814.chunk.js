(this["webpackJsonpfind-my-mines"]=this["webpackJsonpfind-my-mines"]||[]).push([[0],{124:function(e,t){},127:function(e,t,a){"use strict";a.r(t);var n,E=a(0),o=a.n(E),c=a(70),r=a.n(c),i=(a(83),a(20)),l=(a(84),a(14)),m=a(72),u=a(5),s=a(129),A=a(37),_=a(130),T=a(134),C=a(133);function d(){return o.a.createElement(m.a,{width:"full",height:"60%",align:"center",position:"absolute",justifyContent:"center"},o.a.createElement(u.a,{p:2},o.a.createElement(u.a,{textAlign:"center"},o.a.createElement(s.a,null,"Mine Sweeper")),o.a.createElement(u.a,{my:4,textAlign:"left",justifyItems:"center"},o.a.createElement(A.a,null,o.a.createElement(_.a,{mb:"2"},"Enter your name:"),o.a.createElement(T.a,{type:"text",placeholder:"John",variant:"outline",width:"-32px"})),o.a.createElement(l.b,{to:"/game",style:{textDecoration:"none"}},o.a.createElement(C.a,{width:"full",mt:4,variantColor:"green",variant:"outline"},"Continue")))))}function g(e){var t=e.link,a=e.text;return o.a.createElement(l.b,{to:t,style:{textDecoration:"none"}},o.a.createElement(C.a,{variantColor:"green",variant:e.loading[0]===t?"solid":"outline",onClick:function(){switch(e.setLoading([t,!0]),t){case"/game/create":return console.log("Create");case"/game/join":return console.log("joinnnnn");case"/game/quick-game":return console.log("quickkkk")}},margin:"2"},a))}!function(e){e.CONNECTION="connection",e.DISCONNECT="disconnect",e.TICK="TICK",e.NEXT_PLAYER="NEXT_PLAYER",e.COORDINATED_SELECTED="COORDINATED_SELECTED",e.WINNER="WINNER",e.GAME_STATE_CHANGED="GAME_STATE_CHANGED",e.CURRENT_PLAYER="CURRENT_PLAYER",e.SELECT_COORDINATE_FEEDBACK="SELECT_COORDINATE_FEEDBACK",e.CREATE_GAME_FEEDBACK="CREATE_GAME_FEEDBACK",e.JOIN_GAME_FEEDBACK="JOIN_GAME_FEEDBACK",e.QUICK_MATCH_FEEDBACK="QUICK_MATCH_FEEDBACK",e.START_GAME_FEEDBACK="START_GAME_FEEDBACK",e.SET_BOARD_SIZE_FEEDBACK="SET_BOARD_SIZE_FEEDBACK",e.PAUSE_FEEDBACK="PAUSE_FEEDBACK",e.SET_NUMBER_OF_BOMB_FEEDBACK="SET_NUMBER_OF_BOMB_FEEDBACK",e.SET_MAX_PLAYER_FEEDBACK="SET_MAX_PLAYER_FEEDBACK",e.GET_CURRENT_PLAYER_FEEDBACK="GET_CURRENT_PLAYER_FEEDBACK",e.SELECT_COORDINATE="SELECT_COORDINATE",e.CREATE_GAME="CREATE_GAME",e.JOIN_GAME="JOIN_GAME",e.QUICK_MATCH="QUICK_MATCH",e.START_GAME="START_GAME",e.SET_BOARD_SIZE="SET_BOARD_SIZE",e.PAUSE="PAUSE",e.SET_NUMBER_OF_BOMB="SET_NUMBER_OF_BOMB",e.SET_MAX_PLAYER="SET_MAX_PLAYER",e.GET_CURRENT_PLAYER="GET_CURRENT_PLAYER"}(n||(n={}));var O=n;function b(e){var t=e.emitEvent;return o.a.createElement(C.a,{variantColor:"green",variant:"outline",onClick:function(){console.log("Emit START_GAME"),t(O.START_GAME,null)},margin:"2"},"Start Game")}function h(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(C.a,{variantColor:"orange",variant:"outline",onClick:function(){e.setSelectedTab(["",!1])},margin:"2"},"Back")),o.a.createElement(g,{link:"/game/create",text:"Create Room",isLoading:e.selectedTab[1],loading:e.selectedTab,setLoading:e.setSelectedTab,emitEvent:e.emitEvent}),o.a.createElement(g,{link:"/game/join",text:"Join Room",isLoading:e.selectedTab[1],loading:e.selectedTab,setLoading:e.setSelectedTab,emitEvent:e.emitEvent}),o.a.createElement(g,{link:"/game/quick-game",text:"Quick Game",isLoading:e.selectedTab[1],loading:e.selectedTab,setLoading:e.setSelectedTab,emitEvent:e.emitEvent}),o.a.createElement(b,{emitEvent:e.emitEvent}))}var R=a(131),D=a(17),S=Object(E.createContext)({}),f={width:-1,height:-1,id:"",started:!1,noBombs:-1,noBombsFound:-1,players:[],coordinates:[],tick:-1},v=function(e,t){for(var a=[],n=0;n<e;n++)for(var E=0;E<t;E++)a.push({x:n,y:E,isBomb:!1,isSelected:!1});return a},p=function(e,t){var a,n,E,o=t.type,c=t.payload;switch(o){case"SET_TICK":return Object(D.a)(Object(D.a)({},e),{},{tick:c});case"SET_GAME_ID":return Object(D.a)(Object(D.a)({},e),{},{id:c});case"INITIALIZE":return Object(D.a)(Object(D.a)({},e),{},{started:!0,width:c.boardWidth,height:c.boardHeight,noBombs:c.numberOfBombs,noBombsFound:c.numberOfBombsFound,players:c.players,coordinates:v(c.boardWidth,c.boardHeight)});case"COORDINATE_FEEDBACK":return Object(D.a)(Object(D.a)({},e),{},{coordinates:(a=e.coordinates,n=c,E=e.width,n.forEach((function(e){a[e.x+e.y*E]=e})),a)});default:return e}},B=function(e){var t=e.children,a=Object(E.useReducer)(p,f),n=Object(i.a)(a,2),c=n[0],r=n[1];return o.a.createElement(S.Provider,{value:{gameState:c,gameDispatch:r}},t)};function I(e){var t=Object(E.useContext)(S).gameState;if(!t.started)return o.a.createElement("div",null,o.a.createElement("h2",null,"Loading..."),o.a.createElement("p",null,"Make sure you create/join game before starting."));for(var a=function(t){console.log("SELECT_COORDINATE",t.target.dataset.x,t.target.dataset.y),e.emitEvent(O.SELECT_COORDINATE,{x:+t.target.dataset.x,y:+t.target.dataset.y})},n=[],c=0;c<36;c++){var r=void 0,i=t.coordinates[c];r=i.isSelected?i.isBomb?"\ud83d\udca3":"\u274c":"\ud83c\udfaf",n.push(o.a.createElement(C.a,{"data-x":c%t.width,"data-y":Math.floor(c/t.height),variantColor:"green",onClick:a},r))}return o.a.createElement(R.a,{templateColumns:"repeat(".concat(t.width,", 1fr)"),templateRows:"repeat(".concat(t.height,", 1fr)"),gap:1},n)}var N=a(6);function M(e){var t=Object(E.useContext)(S).gameState;return o.a.createElement("nav",null,o.a.createElement(u.a,null,o.a.createElement(N.d,null,o.a.createElement(N.b,{path:"/game"},t.started?o.a.createElement(N.a,{to:"/play"}):o.a.createElement(h,{selectedTab:e.selectedTab,setSelectedTab:e.setSelectedTab,emitEvent:e.emitEvent})),o.a.createElement(N.b,{path:"/play"},o.a.createElement(I,null)))))}var K=a(77),F=a.n(K);function G(e){var t=Object(E.useState)(),a=Object(i.a)(t,2),n=a[0],o=a[1];return Object(E.useEffect)((function(){console.log("Connecting to WS...");var t=F()(e);o(t)}),[e]),{socket:n,emitEvent:function(e,t){n&&n.emit(e,t)}}}function y(e,t){e.on(O.CREATE_GAME_FEEDBACK,(function(e){console.log("CREATE_GAME_FEEDBACK",e),console.log("Game ID: ",e.data.gameID),t({type:"SET_GAME_ID",payload:e.data.gameID})})),e.on(O.TICK,(function(e){t({type:"SET_TICK",payload:e})})),e.on(O.JOIN_GAME_FEEDBACK,(function(e){console.log("JOIN_GAME_FEEDBACK",e)})),e.on(O.GAME_STATE_CHANGED,(function(e){console.log(e)})),e.on(O.START_GAME_FEEDBACK,(function(e){console.log("START_GAME_FEEDBACK",e),e.isOK&&t({type:"INITIALIZE",payload:e.data})})),e.on(O.NEXT_PLAYER,(function(e){console.log("NEXT_PLAYER",e)})),e.on(O.SELECT_COORDINATE_FEEDBACK,(function(e){console.log("SELECT_COORDINATE_FEEDBACK",e),e.isOK&&t({type:"COORDINATE_FEEDBACK",payload:e.data.selectedCoordinates})}))}var L=a(27),k=a(132);function j(e){var t=Object(E.useContext)(S),a=(t.gameState,t.gameDispatch),n=G(("https://netcentric-architecture.herokuapp.com/","https://netcentric-architecture.herokuapp.com/")),o=n.socket;n.emitEvent;Object(E.useEffect)((function(){o&&y(o,a)}),[o,a])}function x(e){var t=Object(E.useState)(""),a=Object(i.a)(t,2),n=a[0],c=a[1],r=e.emitEvent;return o.a.createElement(k.a,{align:"center"},o.a.createElement(s.a,null,"Join Room"),o.a.createElement(u.a,{margin:"5",maxWidth:"300px"},o.a.createElement(T.a,{placeholder:"Enter the game's ID",width:"-32px",value:n,onChange:function(e){c(e.target.value)}})),o.a.createElement(C.a,{margin:"1rem",onClick:function(){r(O.JOIN_GAME,n)}},"Join"))}var w=function(){var e=Object(E.useState)(["",!1]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(E.useContext)(S).gameDispatch,r=G(("https://netcentric-architecture.herokuapp.com/","https://netcentric-architecture.herokuapp.com/")),m=r.socket,u=r.emitEvent;return Object(E.useEffect)((function(){m&&y(m,c)}),[m,c]),o.a.createElement("div",null,o.a.createElement(l.a,{basename:"/"},o.a.createElement(L.a,null,o.a.createElement(N.d,null,o.a.createElement(N.b,{exact:!0,path:"/"},o.a.createElement(d,null)),o.a.createElement(N.b,{path:"/game"},o.a.createElement(M,{selectedTab:a,setSelectedTab:n,emitEvent:u}),o.a.createElement(N.d,null,o.a.createElement(N.b,{path:"/game/create"},o.a.createElement(j,{emitEvent:u})),o.a.createElement(N.b,{path:"/game/join"},o.a.createElement(x,{emitEvent:u})),o.a.createElement(N.b,{path:"/game/quick-game"},"Quick Game"))),o.a.createElement(N.b,{path:"/play"},o.a.createElement(I,{emitEvent:u}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null,o.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a(127)},83:function(e,t,a){},84:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.0cd98814.chunk.js.map