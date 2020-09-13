import React from 'react';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  let socket: any = null;

  console.log("socket")

  const handleConnect = () => {
    socket = io('http://34.87.49.3:3000');
  }

  const handleDisconnect = () => {
    console.log("lol not supported yet")
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("HI");
    console.log(event.target.name);
  }

  return (
    <div className='App'>
      <h1>Minimum Viable Product for Find My Mines</h1>
      <button onClick={handleConnect}>Connect</button>
      <button onClick={handleDisconnect}>Disconnect</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="event" placeholder="Socket Event" value=""/>
        <input type="text" name="id" placeholder="Game ID" />
        <input type="text" name="x" placeholder="X coordinate" />
        <input type="text" name="y" placeholder="Y coordinate" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
