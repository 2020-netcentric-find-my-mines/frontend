import React, { useEffect, useContext } from "react";
import "./App.css";

import Home from "./pages/Home";
import Play from "./pages/Play";

import { useSocket } from "./hooks/useSocket";
import { GameContext } from "./contexts/useGame";
import onSocketEvent from "./emitEvent.ts/handleEvent";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import CreateGame from "./pages/CreateGame";
import JoinGame from "./pages/JoinGame";
import customTheme from "./styling";

function App() {
  const { gameDispatch } = useContext(GameContext);
  
  // // Initialize Socket.IO
  // const { socket, emitEvent } = useSocket(
  //   process.env.REACT_APP_SOCKET_URL ??
  //     "https://netcentric-architecture.herokuapp.com/"
  // );

  // console.log(socket);
  // // Handle Socket.IO events
  // useEffect(() => {
  //   if (socket) {
  //     onSocketEvent(socket, gameDispatch);
  //   }
  // }, [socket, gameDispatch]);

  return (
    <div>
      <Router basename="/">
        <ThemeProvider theme={customTheme}>
          <CSSReset />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/play">
              <Play />
            </Route>
            <Switch>
              <Route path="/create">
                <CreateGame />
              </Route>
              <Route path="/join">
                <JoinGame />
              </Route>
              <Route path="/quick-game">Quick Game</Route>
            </Switch>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
