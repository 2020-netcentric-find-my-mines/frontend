import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { SocketEvent } from '../socket-event'

export function useSocket(socketURL: string) {
    let [socket, setSocket] = useState<null | SocketIOClient.Socket>()

    // Connect to Socket.IO
    useEffect(() => {
        console.log("Connecting to WS...")
        let s = io(socketURL)
        setSocket(s)
    }, [socketURL])

    function emitEvent(e: SocketEvent, data: any) {
        if (socket) {
            socket.emit(e, data)
        }
    }

    return { socket, emitEvent }
}