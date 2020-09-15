import React, { useEffect, useState } from 'react'
import './App.css'

import Table from './components/Table'
import Timer from './components/Timer'
import Home from './components/Home'
import Game from './components/Game'
import Play from './components/Play'

import emitSocketEvent from './logics/handleSubmit'
import onSocketEvent from './logics/handleEvent'
import { useSocket } from './hooks/useSocket'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { ThemeProvider } from '@chakra-ui/core'

function App() {

  let [state, setState] = useState({
    event: "",
    id: "",
    x: "",
    y: "",
  })

  let [gameStarted, setGameStarted] = useState(false)
  let [tick, setTick] = useState(-1)
  let [coordinate, setCoordinate] = useState([])
  let [loading, setLoading] = useState(["", false]);

  // Initialize Socket.IO
  let { socket, emitEvent } = useSocket(process.env.REACT_APP_SOCKET_URL ?? "https://netcentric-architecture.herokuapp.com/")


  // Handle Socket.IO events
  useEffect(() => {
    if (socket) {
      onSocketEvent(socket, setTick, setCoordinate, setGameStarted)
    }
  }, [socket])

  const handleInputChange = (event: any) => {
    event.persist()
    setState((prevState) => {
      return ({
        ...prevState,
        [event.target.name]: event.target.value,
      })
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    console.log(state)

    emitSocketEvent(state.event, emitEvent, state.id)
  }

  return (
    // <div className='App'>
    //   <h1>Minimum Viable Product for Find My Mines</h1>
    //   <p>Check console log for debugging</p>
    //   <Timer tick={tick} />
    //   <p>Table key: A for avalable, B for bomb, E for empty</p>
    //   <form onSubmit={handleSubmit}>
    //     <select name="event" value={state.event} onChange={handleInputChange}>
    //       <option value="">---Select Event---</option>
    //       <option value="CREATE_GAME">Create Game</option>
    //       <option value="JOIN_GAME">Join Game</option>
    //       <option value="QUICK_MATCH">Quick Match</option>
    //       <option value="SELECT_COORDINATE">Select Coordinate</option>
    //       <option value="START_GAME">Start Game</option>
    //       <option value="disconnect">Disconnect</option>
    //     </select>
    //     <input type="text" name="id" placeholder="Game ID" value={state.id} onChange={handleInputChange} />
    //     <input type="text" name="x" placeholder="X coordinate" value={state.x} onChange={handleInputChange} />
    //     <input type="text" name="y" placeholder="Y coordinate" value={state.y} onChange={handleInputChange} />
    //     <button>Submit</button>
    //   </form>

    //   <Table width="6" height="6" visible={tableVisible} coordinate={coordinate} emitEvent={emitEvent}/>

    // </div>
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
                  Create
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
          </Switch>
        </ThemeProvider >
      </Router>
    </div>
  )

}

export default App;
