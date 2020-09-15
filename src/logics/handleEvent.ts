import SocketEvent from '../socket-event'

export default function onSocketEvent(
    socket: any, 
    setTick: any, 
    setCoordinate: any, 
    setTableVisible: any
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
        setCoordinate(d.data.coordinates)
        if (d.isOK) {
        setTableVisible(true)
        }
    })

    socket.on(SocketEvent.NEXT_PLAYER, (d: any) => {
        console.log('NEXT_PLAYER', d)
    })

    socket.on(SocketEvent.SELECT_COORDINATE_FEEDBACK, (d: any) => {
        console.log('SELECT_COORDINATE_FEEDBACK', d)
        if (d.isOK) {
        setCoordinate(d.data.coordinates)
        }
    })
}