import { Dispatch } from "react";

export default interface ISocketContext {
  socket: SocketIOClient.Socket;
  emitEvent: Function;
}