import React, { useEffect, useState, useContext } from "react";
import "./App.css";

import Home from "./components/Home";
import Game from "./components/Game";
import Play from "./components/Play";

import { useSocket } from "./hooks/useSocket";
import { GameContext } from "./contexts/useGame";
import onSocketEvent from "./logics/handleEvent";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { ThemeProvider } from "@chakra-ui/core";
import CreateGame from "./components/CreateGame";
import JoinGame from "./components/JoinGame";

function App() {
  const [selectedTab, setSelectedTab] = useState(["", false]);
  const { gameState, gameDispatch } = useContext(GameContext);

  // Initialize Socket.IO
  const { socket, emitEvent } = useSocket(
    process.env.REACT_APP_SOCKET_URL ??
      "https://netcentric-architecture.herokuapp.com/"
  );

  // Handle Socket.IO events
  useEffect(() => {
    if (socket) {
      onSocketEvent(socket, gameDispatch);
    }
  }, [socket, gameDispatch]);

  return (
    <div>
      <Router>
        <ThemeProvider>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/game">
              {/*  Switch = what to show in path; Link = route to path; Link is in <Game>/<Lobby>/<Link>  */}
              <Game
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                emitEvent={emitEvent}
              />
              <Switch>
                <Route path="/game/create">
                  <CreateGame
                    gameID={gameState.id}
                    setSelectedTab={setSelectedTab}
                    emitEvent={emitEvent}
                  />
                </Route>
                <Route path="/game/join">
                  <JoinGame emitEvent={emitEvent} />
                </Route>
                <Route path="/game/quick-game">Quick Game</Route>
              </Switch>
            </Route>
            <Route path="/play">
              <Play emitEvent={emitEvent} />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
