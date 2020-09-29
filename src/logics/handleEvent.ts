import SocketEvent from "../socket-event"

export function onSocketEvent(socket: any, gameDispatch: any) {
  socket.on(SocketEvent.CREATE_GAME_FEEDBACK, (d: any) => {
    console.log("CREATE_GAME_FEEDBACK", d);
    console.log("Game ID: ", d.data.gameID);
    gameDispatch({ type: "SET_GAME_ID", payload: d.data.gameID });
  });

  socket.on(SocketEvent.TICK, (tick: number) => {
    gameDispatch({ type: "SET_TICK", payload: tick });
  });

  socket.on(SocketEvent.JOIN_GAME_FEEDBACK, (d: any) => {
    console.log("JOIN_GAME_FEEDBACK", d);
    gameDispatch({ type: "PLAYER_JOINED", payload: d.isOK });
  });

  socket.on(SocketEvent.GAME_STATE_CHANGED, (d: any) => {
    console.log(d);
  });

  socket.on(SocketEvent.START_GAME_FEEDBACK, (d: any) => {
    console.log("START_GAME_FEEDBACK", d);
    if (d.isOK) {
      gameDispatch({ type: "INITIALIZE", payload: d.data });
    }
  });

  socket.on(SocketEvent.NEXT_PLAYER, (d: any) => {
    console.log("NEXT_PLAYER", d);
    gameDispatch({ type: "SET_CURRENT_PLAYER", payload: d.id})
  });

  socket.on(SocketEvent.SELECT_COORDINATE_FEEDBACK, (d: any) => {
    console.log("SELECT_COORDINATE_FEEDBACK", d);
    if (d.isOK) {
      gameDispatch({
        type: "COORDINATE_FEEDBACK",
        payload: d.data.selectedCoordinates,
      });
    }
  });

  socket.on(SocketEvent.SET_PLAYER_NAME_FEEDBACK, (d: any) => {
    console.log("SET_PLAYER_NAME_FEEDBACK", d);
  });
}
