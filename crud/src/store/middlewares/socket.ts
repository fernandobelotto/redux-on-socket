import { Middleware } from "redux";
import { socket } from "../../socket/SocketProvider";

export const socketMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("socketMiddleware", action);
  if (action.broadcast) {
    socket.emit("action", JSON.stringify(action));
  }

  return next(action);
};
