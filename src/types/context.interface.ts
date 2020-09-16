import { Dispatch } from 'react';
import IGame from './game.interface'

interface IDispatchType {
    state: any,
    action: any
}

export default interface IContext {
    gameState: IGame,
    gameDispatch: Dispatch<IDispatchType>
}