import React, { useEffect, useContext } from "react";
import "./App.css";

import Home from "./pages/Home";
import Play from "./pages/Play";

import { GameContext } from "./contexts/useGame";
import { SocketContext } from "./contexts/useSocket";
import { onSocketEvent } from "./logics/handleEvent";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import CreateGame from "./pages/CreateGame";
import JoinGame from "./pages/JoinGame";
import Leaderboard from "./pages/Leaderboard";
import customTheme from "./styling";

function App() {
  const { gameDispatch } = useContext(GameContext);
  const { socket } = useContext(SocketContext);

  // Handle Socket.IO events
  useEffect(() => {
    if (socket) {
      onSocketEvent(socket, gameDispatch);
    }
  }, [socket, gameDispatch]);

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
              <Route path="/leaderboard">
                <Leaderboard />
              </Route>
            </Switch>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
