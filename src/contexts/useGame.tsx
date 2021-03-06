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
  currentPlayerName: "",
  name: "",
  players: [],
  coordinates: [],
  tick: 10,
  playerJoined: false,
  showWinnerModal: false,
  winner: [],
  firstToast: true
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
      case "WINNER":
      return {
        ...state,
        winner: payload,
      };
      case "TOASTED":
      return {
        ...state,
        firstToast: false,
      };
    case "SET_GAME_ID":
      return {
        ...state,
        id: payload,
      };
    case "SHOW_WINNER":
      return {
        ...state,
        showWinnerModal: payload,
      };
    case "RESET_BOARD":
      let players = state.players;
      players.map((player) => {
        return (player.score = 0);
      });
      return {
        ...state,
        coordinates: initializeCoordinate(
          state.width,
          state.height
        ),
        players: payload.players,
      };
    case "INITIALIZE":
      return {
        ...state,
        id: payload.gameID,
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
        currentPlayer: payload.id,
        currentPlayerName:
          payload.name === null || payload.name === ""
            ? "Anonymous"
            : payload.name,
      };
    case "SET_PLAYER_NAME":
      return {
        ...state,
        name: payload === null || payload === "" ? "Anonymous" : payload,
      };
    case "SET_PLAYERS":
      return {
        ...state,
        players: payload,
      };
    case "UPDATE_PLAYERS_SCORE":
      return {
        ...state,
        players: payload,
      };
    case "MEMBER_JOINED":
      const playersAfterJoined = state.players;
      if (payload.type === "player") {
        playersAfterJoined.push(payload);
      }
      return {
        ...state,
        players: playersAfterJoined,
      };
    case "MEMBER_LEFT":
      const playersAfterLeft = payload.type === "player" ? state.players.filter((player) => {
        return player.id !== payload.id
      }) : state.players

      return {
        ...state,
        players: playersAfterLeft,
      };
    case "MEMBER_CHANGED":
      if (payload.newType === "player") {
        const playersAfterJoined = state.players;
        playersAfterJoined.push(payload.member);

        return {
          ...state,
          players: playersAfterJoined,
        };
      } else if (payload.newType === "spectator") {
        const playersAfterLeft = payload.type === "player" ? state.players.filter((player) => {
          return player.id !== payload.id
        }) : state.players

        return {
          ...state,
          players: playersAfterLeft,
        };
      }
      return state;
    case "LEAVE_GAME":
      return {
        ...state,
        id: "",
        started: false,
        playerJoined: false,
        showWinnerModal: false,
        winner: [],
        players: []
      }
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
