import React, {useState} from 'react'
import io from 'socket.io-client'
import {SocketEvent} from './socket-event'
import './App.css'

function App() {

  let [state, setState] = useState({
    event: "",
    id: "",
    x: "",
    y: "",
  })

  let [socket, setSocket] = useState(io('http://34.87.49.3:3000'))

  const handleConnect = () => {
    setSocket(io('http://34.87.49.3:3000'))
    console.log("Reconnected.")
  }

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
      socket.emit(SocketEvent.CREATE_GAME)
      console.log("Created game.")

    } else if (state.event === SocketEvent.JOIN_GAME) {
      socket.emit(SocketEvent.JOIN_GAME, state.id)
      console.log("Joined game.")

    } else if (state.event === SocketEvent.QUICK_MATCH) {
      socket.emit(SocketEvent.QUICK_MATCH)
      console.log("Quick matched.")

    } else if (state.event === SocketEvent.SELECT_COORDINATE) {
      socket.emit(SocketEvent.SELECT_COORDINATE)
      console.log("Coordinate chosen.")

    } else if (state.event === SocketEvent.DISCONNECT) {
      socket.emit(SocketEvent.DISCONNECT)
      console.log("Disconnected.")

    } else {
      console.log("Incorrect input. Please consult socket-event.ts for valid inputs.")
    }
  }

  return (
    <div className='App'>
      <h1>Minimum Viable Product for Find My Mines</h1>
      <p>Check console log for debugging</p>
      <button onClick={handleConnect}>Reconnect</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="event" placeholder="Socket Event" value={state.event} onChange={handleInputChange} />
        <input type="text" name="id" placeholder="Game ID" value={state.id} onChange={handleInputChange} />
        <input type="text" name="x" placeholder="X coordinate" value={state.x} onChange={handleInputChange} />
        <input type="text" name="y" placeholder="Y coordinate" value={state.y} onChange={handleInputChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
