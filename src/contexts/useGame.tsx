import React, { createContext, useReducer } from 'react'
import IContext from '../types/context.interface'
import ICoordinate from '../types/coordinate.interface'

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
    for (let x = 0; x < boardWidth; x++) {
        for (let y = 0; y < boardHeight; y++) {
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

const updateCoordinate = (current: ICoordinate[], selected: ICoordinate[], width: number) => {
    selected.forEach((cell) => {
        current[cell.x + cell.y * width] = cell
    })
    
    return current
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
                started: true,
                width: payload.boardWidth,
                height: payload.boardHeight,
                noBombs: payload.numberOfBombs,
                noBombsFound: payload.numberOfBombsFound,
                players: payload.players,
                coordinates: initializeCoordinate(payload.boardWidth, payload.boardHeight)
            })
        case 'COORDINATE_FEEDBACK':
            return ({
                ...state,
                coordinates: updateCoordinate(state.coordinates, payload, state.width)
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