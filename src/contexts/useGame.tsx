import React, { createContext, useReducer } from "react";
import { IGameContext, ICoordinate, IGame, IAction } from "../types/interface";

export const GameContext = createContext({} as IGameContext);

const initialState = {
  width: -1,
  height: -1,
  id: "",
  started: false,
  noBombs: -1,
  noBombsFound: -1,
  currentPlayer: "",
  players: [],
  coordinates: [],
  tick: 10,
  playerJoined: false,
};

const initializeCoordinate = (boardWidth: number, boardHeight: number) => {
  let coordinates = [];
  for (let x = 0; x < boardWidth; x++) {
    for (let y = 0; y < boardHeight; y++) {
      coordinates.push({
        x,
        y,
        isBomb: false,
        isSelected: false,
      });
    }
  }
  return coordinates;
};

const updateCoordinate = (
  current: ICoordinate[],
  selected: ICoordinate[],
  width: number
) => {
  selected.forEach((cell) => {
    current[cell.x + cell.y * width] = cell;
  });

  return current;
};

const gameReducer = (state: IGame, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_TICK":
      return {
        ...state,
        tick: payload,
      };
    case "SET_GAME_ID":
      return {
        ...state,
        id: payload,
      };
    case "INITIALIZE":
      return {
        ...state,
        started: true,
        width: payload.boardWidth,
        height: payload.boardHeight,
        noBombs: payload.numberOfBombs,
        noBombsFound: payload.numberOfBombsFound,
        players: payload.players,
        coordinates: initializeCoordinate(
          payload.boardWidth,
          payload.boardHeight
        ),
      };
    case "COORDINATE_FEEDBACK":
      return {
        ...state,
        coordinates: updateCoordinate(state.coordinates, payload, state.width),
      };
    case "PLAYER_JOINED":
      return {
        ...state,
        playerJoined: payload,
      };
    case "SET_CURRENT_PLAYER":
      return {
        ...state,
        currentPlayer: (payload === null || payload === "") ? "Anonymous" : payload,
      };
    default:
      return state;
  }
};

export const GameProvider = ({ children }: any) => {
  const [gameState, gameDispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ gameState, gameDispatch }}>
      {children}
    </GameContext.Provider>
  );
};
