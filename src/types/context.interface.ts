import { Dispatch } from 'react';
import IGame from './game.interface'

export default interface IContext {
    gameState: IGame,
    gameDispatch: Dispatch<any>
}