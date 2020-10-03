(this["webpackJsonpfind-my-mines"]=this["webpackJsonpfind-my-mines"]||[]).push([[0],{112:function(e,t){},126:function(e,t,a){"use strict";a.r(t);var n,E=a(0),r=a.n(E),o=a(70),c=a.n(o),l=(a(82),a(83),a(16)),i=a(17),u=a(128),A=a(5),m=a(129),s=a(37),_=a(130),d=a(135),C=a(133),b=a(72),T=a.n(b),O=Object(E.createContext)({}),g=function(e){var t=e.children,a=Object(E.useState)(T()(("https://netcentric-architecture.herokuapp.com/","https://netcentric-architecture.herokuapp.com/"))),n=Object(l.a)(a,1)[0];return r.a.createElement(O.Provider,{value:{socket:n,emitEvent:function(e,t){n.emit(e,t)}}},t)};!function(e){e.CONNECTION="connection",e.DISCONNECT="disconnect",e.TICK="TICK",e.NEXT_PLAYER="NEXT_PLAYER",e.COORDINATED_SELECTED="COORDINATED_SELECTED",e.WINNER="WINNER",e.GAME_STATE_CHANGED="GAME_STATE_CHANGED",e.CURRENT_PLAYER="CURRENT_PLAYER",e.SELECT_COORDINATE_FEEDBACK="SELECT_COORDINATE_FEEDBACK",e.CREATE_GAME_FEEDBACK="CREATE_GAME_FEEDBACK",e.JOIN_GAME_FEEDBACK="JOIN_GAME_FEEDBACK",e.QUICK_MATCH_FEEDBACK="QUICK_MATCH_FEEDBACK",e.START_GAME_FEEDBACK="START_GAME_FEEDBACK",e.PLAY_AGAIN_FEEDBACK="PLAY_AGAIN_FEEDBACK",e.RESET_BOARD_FEEDBACK="RESET_BOARD_FEEDBACK",e.SET_BOARD_SIZE_FEEDBACK="SET_BOARD_SIZE_FEEDBACK",e.PAUSE_FEEDBACK="PAUSE_FEEDBACK",e.SET_NUMBER_OF_BOMB_FEEDBACK="SET_NUMBER_OF_BOMB_FEEDBACK",e.SET_MAX_PLAYER_FEEDBACK="SET_MAX_PLAYER_FEEDBACK",e.GET_CURRENT_PLAYER_FEEDBACK="GET_CURRENT_PLAYER_FEEDBACK",e.SET_PLAYER_NAME_FEEDBACK="SET_PLAYER_NAME_FEEDBACK",e.SELECT_COORDINATE="SELECT_COORDINATE",e.CREATE_GAME="CREATE_GAME",e.JOIN_GAME="JOIN_GAME",e.QUICK_MATCH="QUICK_MATCH",e.START_GAME="START_GAME",e.PLAY_AGAIN="PLAY_AGAIN",e.RESET_BOARD="RESET_BOARD",e.SET_BOARD_SIZE="SET_BOARD_SIZE",e.PAUSE="PAUSE",e.SET_NUMBER_OF_BOMB="SET_NUMBER_OF_BOMB",e.SET_MAX_PLAYER="SET_MAX_PLAYER",e.GET_CURRENT_PLAYER="GET_CURRENT_PLAYER",e.SET_PLAYER_NAME="SET_PLAYER_NAME"}(n||(n={}));var p=n;function h(){var e=Object(E.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(E.useContext)(O).emitEvent;return r.a.createElement(u.a,{width:"full",height:"100%",align:"center",position:"absolute",justifyContent:"center",bg:"gray.50"},r.a.createElement(A.a,{p:10,bg:"white",borderRadius:10,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},r.a.createElement(A.a,{textAlign:"center"},r.a.createElement(m.a,null,"Mine Sweeper")),r.a.createElement(A.a,{my:4,textAlign:"left",justifyItems:"center"},r.a.createElement(s.a,{onSubmit:function(){}},r.a.createElement(_.a,{mb:"2"},"Enter your name:"),r.a.createElement(d.a,{type:"text",placeholder:"Ex: John",variant:"outline",value:a,onChange:function(e){n(e.target.value)}})),r.a.createElement(i.b,{to:"create",style:{textDecoration:"none"}},r.a.createElement(C.a,{width:"full",mt:4,variantColor:"teal",variant:"solid",onClick:function(){console.log("SET_PLAYER_NAME",a),o(p.SET_PLAYER_NAME,a)}},"Continue")))))}var R=a(7),S=Object(E.createContext)({}),f={width:-1,height:-1,id:"",started:!1,noBombs:-1,noBombsFound:-1,currentPlayer:"",players:[],coordinates:[],tick:10,playerJoined:!1},D=function(e,t){for(var a=[],n=0;n<e;n++)for(var E=0;E<t;E++)a.push({x:n,y:E,isBomb:!1,isSelected:!1});return a},x=function(e,t){var a,n,E,r=t.type,o=t.payload;switch(r){case"SET_TICK":return Object(R.a)(Object(R.a)({},e),{},{tick:o});case"SET_GAME_ID":return Object(R.a)(Object(R.a)({},e),{},{id:o});case"INITIALIZE":return Object(R.a)(Object(R.a)({},e),{},{started:!0,width:o.boardWidth,height:o.boardHeight,noBombs:o.numberOfBombs,noBombsFound:o.numberOfBombsFound,players:o.players,coordinates:D(o.boardWidth,o.boardHeight)});case"COORDINATE_FEEDBACK":return Object(R.a)(Object(R.a)({},e),{},{coordinates:(a=e.coordinates,n=o,E=e.width,n.forEach((function(e){a[e.x+e.y*E]=e})),a)});case"PLAYER_JOINED":return Object(R.a)(Object(R.a)({},e),{},{playerJoined:o});case"SET_CURRENT_PLAYER":return Object(R.a)(Object(R.a)({},e),{},{currentPlayer:null===o||""===o?"Anonymous":o});default:return e}},y=function(e){var t=e.children,a=Object(E.useReducer)(x,f),n=Object(l.a)(a,2),o=n[0],c=n[1];return r.a.createElement(S.Provider,{value:{gameState:o,gameDispatch:c}},t)},B=a(131);function I(){for(var e=Object(E.useContext)(S).gameState,t=Object(E.useContext)(O).emitEvent,a=function(e){console.log("SELECT_COORDINATE",e.target.dataset.x,e.target.dataset.y),t(p.SELECT_COORDINATE,{x:Number(e.target.dataset.x),y:Number(e.target.dataset.y)})},n=[],o=0;o<e.width*e.height;o++){var c=void 0,l=e.coordinates[o];c=l.isSelected?l.isBomb?"\ud83d\udca3":"\u274c":"\ud83c\udfaf";var i=o%e.width%2===Math.floor(o/e.width)%2?"orange.200":"green.200";n.push(r.a.createElement(A.a,{as:"button",border:"4px",borderColor:i,key:o,"data-x":o%e.width,"data-y":Math.floor(o/e.width),width:"50px",height:"50px",bg:i,onClick:a},c))}return r.a.createElement(u.a,{width:"full",height:"100%",align:"center",justifyContent:"center"},r.a.createElement(B.a,{templateColumns:"repeat(".concat(e.width,", 1fr)"),templateRows:"repeat(".concat(e.height,", 1fr)"),border:"4px",borderColor:"gray.200",w:50*e.width+8,h:50*e.width+8,gap:0},n))}var N=a(132);function j(){var e=Object(E.useContext)(S).gameState,t=Object(E.useContext)(O).socket;return r.a.createElement(u.a,{alignItems:"center",flexDirection:"column"},r.a.createElement(m.a,{mb:4},"Find My Mines"),r.a.createElement(N.a,null,"It is ",e.currentPlayer===t.id?"your":"other player's"," turn."),r.a.createElement(N.a,{mb:4},e.currentPlayer===t.id?"".concat(e.tick," seconds left!"):"Please wait..."))}function M(){return Object(E.useContext)(S).gameState.started?r.a.createElement(u.a,{width:"full",height:"100%",align:"center",position:"absolute",justifyContent:"center",bg:"gray.50"},r.a.createElement(A.a,{p:10,bg:"white",borderRadius:10,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",alignItems:"center",justifyContent:"center"},r.a.createElement(j,null),r.a.createElement(I,null))):r.a.createElement("div",null,r.a.createElement("h2",null,"Loading..."),r.a.createElement("p",null,"Make sure you create/join game before starting."),r.a.createElement(i.b,{to:"/"},r.a.createElement(C.a,null,"Click me to go back")))}var K=a(6),v=a(27),F=a(136);function G(){var e=Object(E.useContext)(S).gameState,t=Object(E.useContext)(O).emitEvent,a=Object(E.useState)(!1),n=Object(l.a)(a,2),o=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,e.started?r.a.createElement(K.a,{to:"/play"}):r.a.createElement(u.a,{width:"full",height:"100%",align:"center",position:"absolute",justifyContent:"center",bg:"gray.50"},r.a.createElement(A.a,{p:10,bg:"white",borderRadius:10,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},r.a.createElement(A.a,{textAlign:"center"},r.a.createElement(m.a,null,"Create Game")),r.a.createElement(A.a,{mt:4,textAlign:"left",justifyItems:"center"},r.a.createElement(N.a,{width:"full",mt:"2",fontSize:"md",color:"gray.600",fontWeight:""},""===e.id?"":"ID: ",r.a.createElement("span",{style:{color:"red"}},e.id)),r.a.createElement(C.a,{isLoading:o,loadingText:"Starting...",width:"full",mt:4,variantColor:""===e.id?"teal":"orange",variant:"solid",onClick:""===e.id?function(){t(p.CREATE_GAME,null)}:function(){c(!0),t(p.START_GAME,null)},fontSize:"sm",isDisabled:""!==e.id&&!0!==e.playerJoined},""===e.id?"Generate Game ID":"Start Game"),r.a.createElement(i.b,{to:"/join"},r.a.createElement(C.a,{isLoading:o,width:"full",mt:"2",fontSize:"sm",color:"gray.600"},"Join Game"))))))}function L(){var e=Object(E.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(E.useContext)(S).gameState,c=Object(E.useContext)(O).emitEvent,b=Object(E.useState)(!1),T=Object(l.a)(b,2),g=T[0],h=T[1];return r.a.createElement(r.a.Fragment,null,o.started?r.a.createElement(K.a,{to:"/play"}):r.a.createElement(u.a,{width:"full",height:"100%",align:"center",position:"absolute",justifyContent:"center",bg:"gray.50"},r.a.createElement(A.a,{p:10,bg:"white",borderRadius:10,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},r.a.createElement(A.a,{textAlign:"center"},r.a.createElement(m.a,null,"Join Game")),r.a.createElement(A.a,{mt:4,textAlign:"left",justifyItems:"center"},r.a.createElement(s.a,null,r.a.createElement(_.a,{mb:"2"},"Enter Game ID:"),r.a.createElement(d.a,{type:"text",placeholder:"Ex: XRTMK35",variant:"outline",value:a,onChange:function(e){n(e.target.value)}})),r.a.createElement(C.a,{isLoading:g,loadingText:"Starting...",width:"full",mt:4,variantColor:!0===o.playerJoined?"orange":"teal",variant:"solid",onClick:!0===o.playerJoined?function(){h(!0),c(p.START_GAME,null)}:function(){c(p.JOIN_GAME,a)},fontSize:"sm"},!0===o.playerJoined?"Start Game":"Join Game"),r.a.createElement(i.b,{to:"/create"},r.a.createElement(C.a,{isLoading:g,width:"full",mt:"2",fontSize:"sm",color:"gray.600"},"Create game"))))))}var w=a(134),P=Object(R.a)(Object(R.a)({},w.a),{},{colors:Object(R.a)(Object(R.a)({},w.a.colors),{},{accentColor:"#1a365d"}),borders:Object(R.a)(Object(R.a)({},w.a.borders),{},{"8px":8})});var Y=function(){var e=Object(E.useContext)(S).gameDispatch,t=Object(E.useContext)(O).socket;return Object(E.useEffect)((function(){t&&function(e,t){e.on(p.CREATE_GAME_FEEDBACK,(function(e){console.log("CREATE_GAME_FEEDBACK",e),t({type:"SET_GAME_ID",payload:e.data.gameID})})),e.on(p.TICK,(function(e){t({type:"SET_TICK",payload:e})})),e.on(p.JOIN_GAME_FEEDBACK,(function(e){console.log("JOIN_GAME_FEEDBACK",e),t({type:"PLAYER_JOINED",payload:e.isOK})})),e.on(p.START_GAME_FEEDBACK,(function(e){console.log("START_GAME_FEEDBACK",e),e.isOK&&t({type:"INITIALIZE",payload:e.data})})),e.on(p.NEXT_PLAYER,(function(e){console.log("NEXT_PLAYER",e),t({type:"SET_CURRENT_PLAYER",payload:e.id})})),e.on(p.SELECT_COORDINATE_FEEDBACK,(function(e){console.log("SELECT_COORDINATE_FEEDBACK",e),e.isOK&&t({type:"COORDINATE_FEEDBACK",payload:e.data.selectedCoordinates})}))}(t,e)}),[t,e]),r.a.createElement("div",null,r.a.createElement(i.a,{basename:"/"},r.a.createElement(v.a,{theme:P},r.a.createElement(F.a,null),r.a.createElement(K.d,null,r.a.createElement(K.b,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(K.b,{path:"/play"},r.a.createElement(M,null)),r.a.createElement(K.d,null,r.a.createElement(K.b,{path:"/create"},r.a.createElement(G,null)),r.a.createElement(K.b,{path:"/join"},r.a.createElement(L,null)),r.a.createElement(K.b,{path:"/quick-game"},"Quick Game"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(Y,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a(126)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.e21cae4e.chunk.js.map