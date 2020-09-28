import React, { createContext, useState } from "react"
import io from "socket.io-client"
import ISocketContext from "../types/socketContext.interface"

export const SocketContext = createContext({} as ISocketContext)

export const SocketProvider = ({ children }: any) => {

  const [ socket ] = useState(io(process.env.REACT_APP_SOCKET_URL ??
    "https://netcentric-architecture.herokuapp.com/"))

  const emitEvent = (event: any, data: any) => {
    socket.emit(event, data)
  }

  return (
    <SocketContext.Provider value={{ socket, emitEvent }}>
      {children}
    </SocketContext.Provider>
  );
};
