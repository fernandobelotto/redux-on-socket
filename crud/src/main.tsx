import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import store from "./store";
import { SocketProvider } from "./socket/SocketProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <SocketProvider>
            <AppRoutes />
          </SocketProvider>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
