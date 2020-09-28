import { Dispatch } from "react";
import IGame from "./game.interface";

export default interface IGameContext {
  gameState: IGame;
  gameDispatch: Dispatch<any>;
}
