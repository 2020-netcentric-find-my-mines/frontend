import React, { createContext, useReducer } from "react"
import io from "socket.io-client"
import ISocketContext from "../types/socketContext.interface"

export const SocketContext = createContext({} as ISocketContext)

const initialState = io(process.env.REACT_APP_SOCKET_URL ??
    "https://netcentric-architecture.herokuapp.com/")

const socketReducer = (state: any, action: any) => {
    state.emit(action.type, action.payload)
    return state
}

export const SocketProvider = ({ children }: any) => {
  const [socket, socketDispatch] = useReducer(socketReducer, initialState);
  
  return (
    <SocketContext.Provider value={{ socket, socketDispatch }}>
      {children}
    </SocketContext.Provider>
  );
};
