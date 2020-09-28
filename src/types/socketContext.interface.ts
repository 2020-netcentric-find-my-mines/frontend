import { Dispatch } from "react";

export default interface ISocketContext {
  socket: null | SocketIOClient.Socket;
  socketDispatch: Dispatch<any>;
}