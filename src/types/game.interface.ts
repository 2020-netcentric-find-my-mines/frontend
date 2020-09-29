import ICoordinate from "./coordinate.interface";

export default interface IGame {
  width: number;
  height: number;
  id: string;
  started: boolean;
  noBombs: number;
  noBombsFound: number;
  currentPlayer: string;
  players: string[];
  coordinates: ICoordinate[];
  tick: number;
  playerJoined: boolean;
}
