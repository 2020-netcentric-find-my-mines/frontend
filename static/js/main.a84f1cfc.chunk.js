(this["webpackJsonpfind-my-mines"]=this["webpackJsonpfind-my-mines"]||[]).push([[0],{123:function(e,t){},153:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),E=a(80),o=a.n(E),c=(a(93),a(94),a(10)),i=a(14),m=a(155),u=a(4),s=a(156),d=a(39),A=a(157),_=a(163),b=a(161),C=a(6),g=Object(r.createContext)({}),h={width:-1,height:-1,id:"",started:!1,noBombs:-1,noBombsFound:-1,currentPlayer:"",thisPlayer:"",thisPlayerName:"",players:[],coordinates:[],tick:10,playerJoined:!1},T=function(e,t){for(var a=[],n=0;n<e;n++)for(var r=0;r<t;r++)a.push({x:n,y:r,isBomb:!1,isSelected:!1});return a},p=function(e,t){var a,n,r,l=t.type,E=t.payload;switch(l){case"SET_TICK":return Object(C.a)(Object(C.a)({},e),{},{tick:E});case"SET_GAME_ID":return Object(C.a)(Object(C.a)({},e),{},{id:E});case"INITIALIZE":return Object(C.a)(Object(C.a)({},e),{},{started:!0,width:E.boardWidth,height:E.boardHeight,noBombs:E.numberOfBombs,noBombsFound:E.numberOfBombsFound,players:E.players,coordinates:T(E.boardWidth,E.boardHeight)});case"COORDINATE_FEEDBACK":return Object(C.a)(Object(C.a)({},e),{},{coordinates:(a=e.coordinates,n=E,r=e.width,n.forEach((function(e){a[e.x+e.y*r]=e})),a)});case"PLAYER_JOINED":return Object(C.a)(Object(C.a)({},e),{},{playerJoined:E});case"SET_CURRENT_PLAYER":return Object(C.a)(Object(C.a)({},e),{},{currentPlayer:null===E||""===E?"Anonymous":E});case"SET_PLAYER_NAME":return Object(C.a)(Object(C.a)({},e),{},{thisPlayerName:E});default:return e}},O=function(e){var t=e.children,a=Object(r.useReducer)(p,h),n=Object(c.a)(a,2),E=n[0],o=n[1];return l.a.createElement(g.Provider,{value:{gameState:E,gameDispatch:o}},t)},f=a(83),R=a.n(f),S=Object(r.createContext)({}),y=function(e){var t=e.children,a=Object(r.useState)(R()(("https://netcentric-architecture.herokuapp.com/","https://netcentric-architecture.herokuapp.com/"))),n=Object(c.a)(a,1)[0];return l.a.createElement(S.Provider,{value:{socket:n,emitEvent:function(e,t){n.emit(e,t)}}},t)};!function(e){e.CONNECTION="connection",e.DISCONNECT="disconnect",e.TICK="TICK",e.NEXT_PLAYER="NEXT_PLAYER",e.COORDINATED_SELECTED="COORDINATED_SELECTED",e.WINNER="WINNER",e.GAME_STATE_CHANGED="GAME_STATE_CHANGED",e.CURRENT_PLAYER="CURRENT_PLAYER",e.SELECT_COORDINATE_FEEDBACK="SELECT_COORDINATE_FEEDBACK",e.CREATE_GAME_FEEDBACK="CREATE_GAME_FEEDBACK",e.JOIN_GAME_FEEDBACK="JOIN_GAME_FEEDBACK",e.QUICK_MATCH_FEEDBACK="QUICK_MATCH_FEEDBACK",e.START_GAME_FEEDBACK="START_GAME_FEEDBACK",e.PLAY_AGAIN_FEEDBACK="PLAY_AGAIN_FEEDBACK",e.RESET_BOARD_FEEDBACK="RESET_BOARD_FEEDBACK",e.SET_BOARD_SIZE_FEEDBACK="SET_BOARD_SIZE_FEEDBACK",e.PAUSE_FEEDBACK="PAUSE_FEEDBACK",e.SET_NUMBER_OF_BOMB_FEEDBACK="SET_NUMBER_OF_BOMB_FEEDBACK",e.SET_MAX_PLAYER_FEEDBACK="SET_MAX_PLAYER_FEEDBACK",e.GET_CURRENT_PLAYER_FEEDBACK="GET_CURRENT_PLAYER_FEEDBACK",e.SET_PLAYER_NAME_FEEDBACK="SET_PLAYER_NAME_FEEDBACK",e.SELECT_COORDINATE="SELECT_COORDINATE",e.CREATE_GAME="CREATE_GAME",e.JOIN_GAME="JOIN_GAME",e.QUICK_MATCH="QUICK_MATCH",e.START_GAME="START_GAME",e.PLAY_AGAIN="PLAY_AGAIN",e.RESET_BOARD="RESET_BOARD",e.SET_BOARD_SIZE="SET_BOARD_SIZE",e.PAUSE="PAUSE",e.SET_NUMBER_OF_BOMB="SET_NUMBER_OF_BOMB",e.SET_MAX_PLAYER="SET_MAX_PLAYER",e.GET_CURRENT_PLAYER="GET_CURRENT_PLAYER",e.SET_PLAYER_NAME="SET_PLAYER_NAME"}(n||(n={}));var D=n;function x(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],E=Object(r.useContext)(g).gameDispatch,o=Object(r.useContext)(S).emitEvent;return l.a.createElement(m.a,{width:"full",height:"100%",align:"center",position:"absolute",justifyContent:"center",bg:"gray.50"},l.a.createElement(u.a,{p:10,bg:"white",borderRadius:10,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},l.a.createElement(u.a,{textAlign:"center"},l.a.createElement(s.a,null,"Mine Sweeper")),l.a.createElement(u.a,{my:4,textAlign:"left",justifyItems:"center"},l.a.createElement(d.a,{onSubmit:function(){}},l.a.createElement(A.a,{mb:"2"},"Enter your name:"),l.a.createElement(_.a,{type:"text",placeholder:"Ex: John",variant:"outline",value:a,onChange:function(e){n(e.target.value)}})),l.a.createElement(i.b,{to:"create",style:{textDecoration:"none"}},l.a.createElement(b.a,{width:"full",mt:4,variantColor:"teal",variant:"solid",onClick:function(){console.log("SET_PLAYER_NAME",a),E({type:"SET_PLAYER_NAME",payload:a}),o(D.SET_PLAYER_NAME,a)}},"Continue")),l.a.createElement(i.b,{to:"/leaderboard"},l.a.createElement(b.a,{width:"full",mt:"2",fontSize:"sm",color:"gray.600"},"Leaderboard")))))}var j=a(160),B=a(158);function N(){for(var e=Object(r.useContext)(g).gameState,t=Object(r.useContext)(S).emitEvent,a=function(e){console.log("SELECT_COORDINATE",e.target.dataset.x,e.target.dataset.y),t(D.SELECT_COORDINATE,{x:Number(e.target.dataset.x),y:Number(e.target.dataset.y)})},n=[],E=0;E<e.width*e.height;E++){var o=void 0,c=e.coordinates[E];o=c.isSelected?c.isBomb?"\ud83d\udca3":"\u274c":"\ud83c\udfaf";var i=E%e.width%2===Math.floor(E/e.width)%2?"orange.200":"green.200";n.push(l.a.createElement(u.a,{as:"button",border:"4px",borderColor:i,key:E,"data-x":E%e.width,"data-y":Math.floor(E/e.width),width:"50px",height:"50px",bg:i,onClick:a},o))}return l.a.createElement(m.a,{width:"full",height:"100%",align:"center",justifyContent:"center"},l.a.createElement(B.a,{templateColumns:"repeat(".concat(e.width,", 1fr)"),templateRows:"repeat(".concat(e.height,", 1fr)"),border:"4px",borderColor:"gray.200",w:50*e.width+8,h:50*e.width+8,gap:0},n))}var I=a(159);function v(){var e=Object(r.useContext)(g).gameState,t=Object(r.useContext)(S).socket;return l.a.createElement(m.a,{alignItems:"center",flexDirection:"column"},l.a.createElement(s.a,{mb:4},"Find My Mines"),l.a.createElement(I.a,null,"It is ",e.currentPlayer===t.id?"your":"other player's"," turn."),l.a.createElement(I.a,{mb:4},e.currentPlayer===t.id?"".concat(e.tick," seconds left!"):"Please wait..."))}var M=a(43),w=a.n(M);function K(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],E=Object(r.useContext)(g).gameState;return l.a.createElement(_.a,{placeholder:"Chat...",value:a,onSubmit:function(){w.a.post("https://asia-southeast2-findmymines.cloudfunctions.net/getTopScorers",{params:{gameId:E.id},body:{message:a,uid:E.thisPlayer,username:E.thisPlayerName}}),n("")},onChange:function(e){n(e.target.value)}})}function G(){return Object(r.useContext)(g).gameState.started?l.a.createElement(m.a,{width:"full",height:"100%",align:"center",position:"absolute",justifyContent:"center",bg:"gray.50"},l.a.createElement(u.a,{p:10,bg:"white",borderRadius:10,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",alignItems:"center",justifyContent:"center"},l.a.createElement(m.a,null,l.a.createElement(m.a,{direction:"column"},l.a.createElement(v,null),l.a.createElement(N,null)),l.a.createElement(j.a,{orientation:"vertical"}),l.a.createElement(K,null)))):l.a.createElement("div",null,l.a.createElement("h2",null,"Loading..."),l.a.createElement("p",null,"Make sure you create/join game before starting."),l.a.createElement(i.b,{to:"/"},l.a.createElement(b.a,null,"Click me to go back")))}var L=a(7),P=a(28),F=a(164);function k(){var e=Object(r.useContext)(g).gameState,t=Object(r.useContext)(S).emitEvent,a=Object(r.useState)(!1),n=Object(c.a)(a,2),E=n[0],o=n[1];return l.a.createElement(l.a.Fragment,null,e.started?l.a.createElement(L.a,{to:"/play"}):l.a.createElement(m.a,{width:"full",height:"100%",align:"center",position:"absolute",justifyContent:"center",bg:"gray.50"},l.a.createElement(u.a,{p:10,bg:"white",borderRadius:10,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},l.a.createElement(u.a,{textAlign:"center"},l.a.createElement(s.a,null,"Create Game")),l.a.createElement(u.a,{mt:4,textAlign:"left",justifyItems:"center"},l.a.createElement(I.a,{width:"full",mt:"2",fontSize:"md",color:"gray.600",fontWeight:""},""===e.id?"":"ID: ",l.a.createElement("span",{style:{color:"red"}},e.id)),l.a.createElement(b.a,{isLoading:E,loadingText:"Starting...",width:"full",mt:4,variantColor:""===e.id?"teal":"orange",variant:"solid",onClick:""===e.id?function(){t(D.CREATE_GAME,null)}:function(){o(!0),t(D.START_GAME,null)},fontSize:"sm",isDisabled:""!==e.id&&!0!==e.playerJoined},""===e.id?"Generate Game ID":"Start Game"),l.a.createElement(i.b,{to:"/join"},l.a.createElement(b.a,{isLoading:E,width:"full",mt:"2",fontSize:"sm",color:"gray.600"},"Join Game"))))))}function Y(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],E=Object(r.useContext)(g).gameState,o=Object(r.useContext)(S).emitEvent,C=Object(r.useState)(!1),h=Object(c.a)(C,2),T=h[0],p=h[1];return l.a.createElement(l.a.Fragment,null,E.started?l.a.createElement(L.a,{to:"/play"}):l.a.createElement(m.a,{width:"full",height:"100%",align:"center",position:"absolute",justifyContent:"center",bg:"gray.50"},l.a.createElement(u.a,{p:10,bg:"white",borderRadius:10,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},l.a.createElement(u.a,{textAlign:"center"},l.a.createElement(s.a,null,"Join Game")),l.a.createElement(u.a,{mt:4,textAlign:"left",justifyItems:"center"},l.a.createElement(d.a,null,l.a.createElement(A.a,{mb:"2"},"Enter Game ID:"),l.a.createElement(_.a,{type:"text",placeholder:"Ex: XRTMK35",variant:"outline",value:a,onChange:function(e){n(e.target.value)}})),l.a.createElement(b.a,{isLoading:T,loadingText:"Starting...",width:"full",mt:4,variantColor:!0===E.playerJoined?"orange":"teal",variant:"solid",onClick:!0===E.playerJoined?function(){p(!0),o(D.START_GAME,null)}:function(){o(D.JOIN_GAME,a)},fontSize:"sm"},!0===E.playerJoined?"Start Game":"Join Game"),l.a.createElement(i.b,{to:"/create"},l.a.createElement(b.a,{isLoading:T,width:"full",mt:"2",fontSize:"sm",color:"gray.600"},"Create game"))))))}var J=a(87);function U(){var e=Object(r.useState)(!0),t=Object(c.a)(e,2),a=t[0],n=t[1];function E(e){"allTime"!==e&&"week"!==e&&"day"!==e||w.a.request({url:"https://asia-southeast2-findmymines.cloudfunctions.net/getTopScorers",params:{numOfPlayers:1,timeRange:e},transformResponse:function(e){return e.data}}).then((function(t){var a=t.data;a.isOk&&(d[e]=a.topPlayers,n(!1))}))}var o={email:"-",gamesWonWeek:0,firstname:"-",lastname:"-",username:"-",createdAt:{_seconds:0,_nanoseconds:0},gamesWonDay:0,totalGamesWon:0},d={allTime:[o],week:[o],day:[o]};E("allTime"),E("week"),E("day");var A=l.a.createElement(m.a,{direction:"column",justify:"center",alignItems:"center"},l.a.createElement(s.a,{as:"h4"},"All Time"),l.a.createElement(I.a,null,d.allTime[0].username," : ",d.allTime[0].totalGamesWon," Wins"),l.a.createElement(I.a,null,d.allTime[0].email),l.a.createElement(j.a,null),l.a.createElement(s.a,{as:"h4"},"Week"),l.a.createElement(I.a,null,d.week[0].username," : ",d.week[0].gamesWonWeek," Wins"),l.a.createElement(I.a,null,d.week[0].email),l.a.createElement(j.a,null),l.a.createElement(s.a,{as:"h4"},"Day"),l.a.createElement(I.a,null,d.day[0].username," : ",d.day[0].gamesWonDay," Wins"),l.a.createElement(I.a,null,d.day[0].email),l.a.createElement(j.a,null),l.a.createElement(i.b,{to:"/"},l.a.createElement(b.a,{width:"full",mt:"2",fontSize:"sm",color:"gray.600"},"Back")));return l.a.createElement(m.a,{width:"full",height:"100%",align:"center",position:"absolute",justifyContent:"center",bg:"gray.50"},l.a.createElement(u.a,{p:10,bg:"white",borderRadius:10,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},a?l.a.createElement(J.a,null):A))}var W=a(162),X=Object(C.a)(Object(C.a)({},W.a),{},{colors:Object(C.a)(Object(C.a)({},W.a.colors),{},{accentColor:"#1a365d"}),borders:Object(C.a)(Object(C.a)({},W.a.borders),{},{"8px":8})});var H=function(){var e=Object(r.useContext)(g).gameDispatch,t=Object(r.useContext)(S).socket;return Object(r.useEffect)((function(){t&&function(e,t){e.on(D.CREATE_GAME_FEEDBACK,(function(e){console.log("CREATE_GAME_FEEDBACK",e),t({type:"SET_GAME_ID",payload:e.data.gameID})})),e.on(D.TICK,(function(e){t({type:"SET_TICK",payload:e})})),e.on(D.JOIN_GAME_FEEDBACK,(function(e){console.log("JOIN_GAME_FEEDBACK",e),t({type:"PLAYER_JOINED",payload:e.isOK})})),e.on(D.START_GAME_FEEDBACK,(function(e){console.log("START_GAME_FEEDBACK",e),e.isOK&&t({type:"INITIALIZE",payload:e.data})})),e.on(D.NEXT_PLAYER,(function(e){console.log("NEXT_PLAYER",e),t({type:"SET_CURRENT_PLAYER",payload:e.id})})),e.on(D.SELECT_COORDINATE_FEEDBACK,(function(e){console.log("SELECT_COORDINATE_FEEDBACK",e),e.isOK&&t({type:"COORDINATE_FEEDBACK",payload:e.data.selectedCoordinates})}))}(t,e)}),[t,e]),l.a.createElement("div",null,l.a.createElement(i.a,{basename:"/"},l.a.createElement(P.a,{theme:X},l.a.createElement(F.a,null),l.a.createElement(L.d,null,l.a.createElement(L.b,{exact:!0,path:"/"},l.a.createElement(x,null)),l.a.createElement(L.b,{path:"/play"},l.a.createElement(G,null)),l.a.createElement(L.d,null,l.a.createElement(L.b,{path:"/create"},l.a.createElement(k,null)),l.a.createElement(L.b,{path:"/join"},l.a.createElement(Y,null)),l.a.createElement(L.b,{path:"/quick-game"},"Quick Game"),l.a.createElement(L.b,{path:"/leaderboard"},l.a.createElement(U,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null,l.a.createElement(y,null,l.a.createElement(H,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(153)},93:function(e,t,a){},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.a84f1cfc.chunk.js.map