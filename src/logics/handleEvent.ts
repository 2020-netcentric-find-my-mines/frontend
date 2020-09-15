import SocketEvent from '../socket-event'

export default function onSocketEvent(
    socket: any, 
    setTick: any, 
    setGame: any
){
    socket.on(SocketEvent.CREATE_GAME_FEEDBACK, (d: any) => {
        console.log('CREATE_GAME_FEEDBACK', d)
        console.log('Game ID: ', d.data.gameID)
    })

    socket.on(SocketEvent.TICK, (d: any) => {
        setTick(d)
    })

    socket.on(SocketEvent.JOIN_GAME_FEEDBACK, (d: any) => {
        console.log('JOIN_GAME_FEEDBACK', d)
    })

    socket.on(SocketEvent.GAME_STATE_CHANGED, (d: any) => {
        console.log(d)
    })

    socket.on(SocketEvent.START_GAME_FEEDBACK, (d: any) => {
        console.log('START_GAME_FEEDBACK', d)
        if (d.isOK) {
            setGame("boardWidth", d.data.boardWidth)
            setGame("boardHeight", d.data.boardHeight)
            setGame("gameId", d.data.gameId)
            setGame("noBombs", d.data.boardHeight)
            setGame("noBombsFound", d.data.boardHeight)
            setGame("players", d.data.players)
            setGame("coordinates", initializeCoordinate(d.data.boardWidth, d.data.boardHeight))
        }
    })

    socket.on(SocketEvent.NEXT_PLAYER, (d: any) => {
        console.log('NEXT_PLAYER', d)
    })

    socket.on(SocketEvent.SELECT_COORDINATE_FEEDBACK, (d: any) => {
        console.log('SELECT_COORDINATE_FEEDBACK', d)
        if (d.isOK) {
            //setCoordinate(d.data.coordinates)
        }
    })
}

function initializeCoordinate(boardWidth: number, boardHeight: number) {
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