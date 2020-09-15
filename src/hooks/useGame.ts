import { useState } from 'react'

export function useGame() {
    let [boardWidth, setBoardWidth] = useState(-1)
    let [boardHeight, setBoardHeight] = useState(-1)
    let [gameId, setGameId] = useState("")
    let [noBombs, setNoBombs] = useState(-1)
    let [noBombsFound, setNoBombsFound] = useState(-1)
    let [players, setPlayers] = useState([])
    let [coordinates, setCoordinates] = useState([])

    let game = {
        boardWidth,
        boardHeight,
        gameId,
        noBombs,
        noBombsFound,
        players,
        coordinates
    }
    function setGame(key: string, value: any) {
        // eval(key + "(" + value + ")")
    }
    return [ game, setGame ]
}