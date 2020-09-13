import { monitorEventLoopDelay } from 'perf_hooks'
import React, {useState} from 'react'
import io from 'socket.io-client'
import './App.css'

function App() {

  let [state, setState] = useState({
    event: "",
    id: "",
    x: 0,
    y: 0,
  })

  let socket: any = null

  console.log("socket")

  const handleConnect = () => {
    socket = io('http://34.87.49.3:3000')
  }

  const handleDisconnect = () => {
    console.log("lol not supported yet")
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
    console.log("HI")
    console.log(event.target.name)
  }

  return (
    <div className='App'>
      <h1>Minimum Viable Product for Find My Mines</h1>
      <button onClick={handleConnect}>Connect</button>
      <button onClick={handleDisconnect}>Disconnect</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="event" placeholder="Socket Event" value={state.event} onChange={handleInputChange} />
        <input type="text" name="id" placeholder="Game ID" />
        <input type="text" name="x" placeholder="X coordinate" />
        <input type="text" name="y" placeholder="Y coordinate" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
