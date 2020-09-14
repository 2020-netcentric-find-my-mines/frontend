import React, { useEffect, useState } from 'react'

import { SocketEvent } from './socket-event'
import './App.css'
import { useSocket } from './hooks/useSocket'

function App() {

  let [state, setState] = useState({
    event: "",
    id: "",
    x: "",
    y: "",
  })

  // Initialize Socket.IO
  let { socket, emitEvent } = useSocket('https://netcentric-architecture.herokuapp.com/')

  // Handle Socket.IO events
  useEffect(() => {
    if (socket) {
      socket.on(SocketEvent.CREATE_GAME_FEEDBACK, (d: any) => {
        console.log('CREATE_GAME_FEEDBACK', d)
      })

      socket.on(SocketEvent.JOIN_GAME_FEEDBACK, (d: any) => {
        console.log('JOIN_GAME_FEEDBACK', d)
      })

      socket.on(SocketEvent.CHANGED_GAMESTATE, () => {
        console.log('CHANGED_GAMESTATE!')
      })
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

    if (state.event === SocketEvent.CREATE_GAME) {
      emitEvent(SocketEvent.CREATE_GAME, null)
      console.log("Created game.")

    } else if (state.event === SocketEvent.JOIN_GAME) {
      emitEvent(SocketEvent.JOIN_GAME, state.id)
      console.log("Joined game.")

    } else if (state.event === SocketEvent.QUICK_MATCH) {
      emitEvent(SocketEvent.QUICK_MATCH, null)
      console.log("Quick matched.")

    } else if (state.event === SocketEvent.SELECT_COORDINATE) {
      emitEvent(SocketEvent.SELECT_COORDINATE, { x: state.x, y: state.y })
      console.log("Coordinate chosen.")

    } else if (state.event === SocketEvent.DISCONNECT) {
      emitEvent(SocketEvent.DISCONNECT, null)
      console.log("Disconnected.")

    } else {
      console.log("Incorrect input. Please consult socket-event.ts for valid inputs.")
    }
  }

  return (
    <div className='App'>
      <h1>Minimum Viable Product for Find My Mines</h1>
      <p>Check console log for debugging</p>
      <form onSubmit={handleSubmit}>
        <select name="event" value={state.event} onChange={handleInputChange}>
          <option value="">---Select Event---</option>
          <option value="CREATE_GAME">Create Game</option>
          <option value="JOIN_GAME">Join Game</option>
          <option value="QUICK_MATCH">Quick Match</option>
          <option value="SELECT_COORDINATE">Select Coordinate</option>
          <option value="disconnect">Disconnect</option>
        </select>
        <input type="text" name="id" placeholder="Game ID" value={state.id} onChange={handleInputChange} />
        <input type="text" name="x" placeholder="X coordinate" value={state.x} onChange={handleInputChange} />
        <input type="text" name="y" placeholder="Y coordinate" value={state.y} onChange={handleInputChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
