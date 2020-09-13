import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { SocketEvent } from '../socket-event'

export function useSocket(socketURL: string) {
    let [socket, setSocket] = useState<null | SocketIOClient.Socket>(null)

    // Connect to Socket.IO
    useEffect(() => {
        let s = io('https://netcentric-architecture.herokuapp.com/')
        setSocket(s)
    }, [])

    function emitEvent(e: SocketEvent, data: any) {
        if (socket) {
            socket.emit(e, data)
        }
    }

    return { socket, emitEvent }
}