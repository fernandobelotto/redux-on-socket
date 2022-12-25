import React, { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useAppDispatch } from "../store";

type Props = {
  children: React.ReactNode;
};

export const socket: Socket<any, any> = io("http://localhost:3002");

export const SocketProvider = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("action", (data: any) => {
      const action = JSON.parse(data);
      dispatch(action);
      console.log("dispatching", JSON.parse(data));
    });

    return () => {
      socket.off("action");
    };
  }, []);

  return <>{props.children}</>;
};
