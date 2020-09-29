import SocketEvent from "../socket-event"
import { Dispatch, ReducerAction, Reducer } from 'react'
import { IGame, IAction, IPayload, IPlayer } from "../types/interface"

export function onSocketEvent(socket: SocketIOClient.Socket, gameDispatch: Dispatch<ReducerAction<Reducer<IGame, IAction>>>) {
  socket.on(SocketEvent.CREATE_GAME_FEEDBACK, (payload: IPayload) => {
    console.log("CREATE_GAME_FEEDBACK", payload);
    gameDispatch({ type: "SET_GAME_ID", payload: payload.data.gameID });
  });

  socket.on(SocketEvent.TICK, (tick: number) => {
    gameDispatch({ type: "SET_TICK", payload: tick });
  });

  socket.on(SocketEvent.JOIN_GAME_FEEDBACK, (payload: IPayload) => {
    console.log("JOIN_GAME_FEEDBACK", payload);
    gameDispatch({ type: "PLAYER_JOINED", payload: payload.isOK });
  });

  socket.on(SocketEvent.START_GAME_FEEDBACK, (payload: IPayload) => {
    console.log("START_GAME_FEEDBACK", payload);
    if (payload.isOK) {
      gameDispatch({ type: "INITIALIZE", payload: payload.data });
    }
  });

  socket.on(SocketEvent.NEXT_PLAYER, (player: IPlayer) => {
    console.log("NEXT_PLAYER", player);
    gameDispatch({ type: "SET_CURRENT_PLAYER", payload: player.id})
  });

  socket.on(SocketEvent.SELECT_COORDINATE_FEEDBACK, (payload: IPayload) => {
    console.log("SELECT_COORDINATE_FEEDBACK", payload);
    if (payload.isOK) {
      gameDispatch({
        type: "COORDINATE_FEEDBACK",
        payload: payload.data.selectedCoordinates,
      });
    }
  });
}
