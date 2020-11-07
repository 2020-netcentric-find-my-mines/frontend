import SocketEvent from "../socket-event";
import { Dispatch, ReducerAction, Reducer } from "react";
import {
  IGame,
  IAction,
  IPayload,
  IPlayer,
  IMemberPayload,
  IMemberChangePayload,
} from "../types/interface";

export function onSocketEvent(
  socket: SocketIOClient.Socket,
  gameDispatch: Dispatch<ReducerAction<Reducer<IGame, IAction>>>
) {
  socket.on(SocketEvent.CREATE_GAME_FEEDBACK, (payload: IPayload) => {
    console.log("CREATE_GAME_FEEDBACK", payload);
    gameDispatch({ type: "SET_GAME_ID", payload: payload.data.gameID });
    gameDispatch({
      type: "SET_PLAYERS",
      payload: payload.data === null ? [] : payload.data.players,
    });
  });

  socket.on(SocketEvent.SET_PLAYER_NAME_FEEDBACK, (payload: IPayload) => {
    console.log("SET_PLAYER_NAME_FEEDBACK", payload);
  });

  socket.on(SocketEvent.WINNER, (payload: IPayload) => {
    console.log("WINNER", payload);
    gameDispatch({ type: "SHOW_WINNER", payload: true });
  });

  socket.on(SocketEvent.TICK, (tick: number) => {
    gameDispatch({ type: "SET_TICK", payload: tick });
  });

  socket.on(SocketEvent.JOIN_GAME_FEEDBACK, (payload: IPayload) => {
    console.log("JOIN_GAME_FEEDBACK", payload);
    gameDispatch({ type: "PLAYER_JOINED", payload: payload.isOK });
    gameDispatch({
      type: "SET_PLAYERS",
      payload: payload.data === null ? [] : payload.data.players,
    });
  });

  socket.on(SocketEvent.START_GAME_FEEDBACK, (payload: IPayload) => {
    console.log("START_GAME_FEEDBACK", payload);
    if (payload.isOK) {
      gameDispatch({ type: "INITIALIZE", payload: payload.data });
    }
  });

  socket.on(SocketEvent.NEXT_PLAYER, (player: IPlayer) => {
    console.log("NEXT_PLAYER", player);
    gameDispatch({ type: "SET_CURRENT_PLAYER", payload: player });
  });

  socket.on(SocketEvent.RESET_BOARD_FEEDBACK, (payload: IPayload) => {
    console.log("RESET_BOARD", payload);
    gameDispatch({ type: "RESET_BOARD", payload: payload.data });
  });

  socket.on(SocketEvent.SELECT_COORDINATE_FEEDBACK, (payload: IPayload) => {
    console.log("SELECT_COORDINATE_FEEDBACK", payload);
    if (payload.isOK) {
      gameDispatch({
        type: "COORDINATE_FEEDBACK",
        payload: payload.data.selectedCoordinates,
      });
      gameDispatch({
        type: "UPDATE_PLAYERS_SCORE",
        payload: payload.data.players,
      });
    }
  });

  socket.on(SocketEvent.MEMBER_JOINED_GAME, (payload: IMemberPayload) => {
    console.log("MEMBER_JOINED_GAME", payload);
    gameDispatch({
      type: "MEMBER_JOINED",
      payload: payload.member,
    });
  });

  socket.on(SocketEvent.MEMBER_LEFT_GAME, (payload: IMemberPayload) => {
    console.log("MEMBER_LEFT_GAME", payload);
    gameDispatch({
      type: "MEMBER_LEFT",
      payload: payload.member,
    });
  });

  socket.on(
    SocketEvent.MEMBER_CHANGED_TYPE,
    (payload: IMemberChangePayload) => {
      console.log("MEMBER_CHANGED_TYPE", payload);
      gameDispatch({
        type: "MEMBER_CHANGED",
        payload: payload,
      });
    }
  );
}
