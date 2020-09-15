import SocketEvent from '../socket-event'

export default function emitSocketEvent(event: string, emitEvent: any, id: string) {
    switch (event) {
        case SocketEvent.CREATE_GAME:
        emitEvent(SocketEvent.CREATE_GAME, null)
        console.log("Emit CREATE_GAME")
        break
        case SocketEvent.JOIN_GAME:
        emitEvent(SocketEvent.JOIN_GAME, id)
        console.log("Emit JOIN_GAME")
        break
        case SocketEvent.START_GAME:
        emitEvent(SocketEvent.START_GAME, null)
        console.log("Emit START_GAME")
        break
        default:
        console.error("Not available!")
    }
}