import { Dispatch } from "react";

export default interface ISocketContext {
  socket: SocketIOClient.Socket;
  socketDispatch: Dispatch<any>;
}