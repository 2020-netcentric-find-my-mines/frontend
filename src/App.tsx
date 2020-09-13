import React from 'react';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {SocketEvent} from './socket-event';
import './App.css';

function App() {

  const handleClick = () => {
    const socket = io('http://34.87.49.3:3000');
    socket.emit(SocketEvent.CONNECTION, socket);
  }

  const handleSubmit = (event: any) => {
    console.log(event.target);
  }

  return (
    <div className='App'>
      <h1>Minimum Viable Product for Find My Mines</h1>
      <button onClick={handleClick}>Connect</button>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Socket Event" />
        <TextField id="outlined-basic" label="Game ID" />
        <TextField id="outlined-basic" label="X coordinate" />
        <TextField id="outlined-basic" label="Y coordinate" />
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
}

export default App;
