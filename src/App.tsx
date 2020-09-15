import React, { useEffect, useState } from 'react'
import './App.css'

import Table from './components/Table'
import Timer from './components/Timer'
import Home from './components/Home'
import Game from './components/Game'
import Play from './components/Play'
import Mvp from './components/Mvp'

import onSocketEvent from './logics/handleEvent'
import { useSocket } from './hooks/useSocket'
import { useGame } from './hooks/useGame'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { ThemeProvider } from '@chakra-ui/core'
import CreateGame from './components/CreateGame'

function App() {

  let [state, setState] = useState({
    event: "",
    id: "",
    x: "",
    y: "",
  })

  let [game, setGame] = useGame()
  let [gameStarted, setGameStarted] = useState(false)
  let [tick, setTick] = useState(-1)
  let [coordinate, setCoordinate] = useState([])
  let [loading, setLoading] = useState(["", false]);
  let [gameID, setGameID] = useState("")

  // Initialize Socket.IO
  let { socket, emitEvent } = useSocket(process.env.REACT_APP_SOCKET_URL ?? "https://netcentric-architecture.herokuapp.com/")


  // Handle Socket.IO events
  useEffect(() => {
    if (socket) {
      onSocketEvent(socket, setTick, setGame, setGameID)
      console.log('GAME HOOKS HERE!!!')
      console.log(game)
    }
  }, [socket])

  return (
    <div>
      <Router>
        <ThemeProvider >
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/game">
              <Game loading={loading} setLoading={setLoading} emitEvent={emitEvent} />
              <Switch>
                <Route path="/game/create">
                  <CreateGame gameID={gameID} setLoading={setLoading}></CreateGame>
                </Route>
                <Route path="/game/join">
                  Join
                </Route>
                <Route path="/game/quick-game">
                  Quick Game
                </Route>
              </Switch>
            </Route>
            <Route path="/play">
              <Play gameStarted={gameStarted} />
            </Route>
            <Route path="/mvp">
              <Mvp state={state} setState={setState} emitEvent={emitEvent} tableVisible={gameStarted} coordinate={coordinate} />
            </Route>
          </Switch>
        </ThemeProvider >
      </Router>
    </div>
  )

}

export default App;
