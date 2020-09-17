import React, { createContext, useReducer } from 'react'
import IContext from '../types/context.interface'

export const GameContext = createContext({} as IContext)

const initialState = {
    width: -1,
    height: -1,
    id: "",
    started: false,
    noBombs: -1,
    noBombsFound: -1,
    players: [],
    coordinates: [],
    tick: -1
}

const initializeCoordinate = (boardWidth: number, boardHeight: number) => {
    let coordinates = []
    for (let x: number = 0; x < boardWidth; x++) {
        for (let y: number = 0; y < boardHeight; y++) {
            coordinates.push({
                x,
                y,
                isBomb: false,
                isSelected: false,
            })
        }
    }
    return coordinates
}

const gameReducer = (state: any, action: any) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_TICK':
            return ({
                ...state,
                tick: payload
            })
        case 'SET_GAME_ID':
            return ({
                ...state,
                id: payload
            })
        case 'INITIALIZE':
            return ({
                ...state,
                width: payload.boardWidth,
                height: payload.boardHeight,
                noBombs: payload.numberOfBombs,
                noBombsFound: payload.numberOfBombsFound,
                players: payload.players,
                coordinate: initializeCoordinate(payload.boardWidth, payload.boardHeight)
            })
        default:
            return (state)
    }
}

export const GameProvider = ({ children }: any) => {
    const [gameState, gameDispatch] = useReducer(
        gameReducer,
        initialState
    )

    return (
        <GameContext.Provider value={{ gameState, gameDispatch }}>
            {children}
        </GameContext.Provider>
    )
}