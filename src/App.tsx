import React, { useEffect, useState } from 'react'
import Table from './components/Table'
import Timer from './components/Timer'
import { SocketEvent } from './socket-event'
import './App.css'
import { useSocket } from './hooks/useSocket'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useRouteMatch
} from "react-router-dom";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, ThemeProvider } from '@chakra-ui/core'

function App() {

  let [state, setState] = useState({
    event: "",
    id: "",
    x: "",
    y: "",
  })

  let [tableVisible, setTableVisible] = useState(false)
  let [tick, setTick] = useState(-1)
  let [coordinate, setCoordinate] = useState([])

  // Initialize Socket.IO
  let { socket, emitEvent } = useSocket(process.env.REACT_APP_SOCKET_URL ?? "https://netcentric-architecture.herokuapp.com/")

  // Handle Socket.IO events
  useEffect(() => {
    if (socket) {
      socket.on(SocketEvent.CREATE_GAME_FEEDBACK, (d: any) => {
        console.log('CREATE_GAME_FEEDBACK', d)
        console.log('Game ID: ', d.data.gameID)
      })

      socket.on(SocketEvent.TICK, (d: any) => {
        setTick(d)
      })

      socket.on(SocketEvent.JOIN_GAME_FEEDBACK, (d: any) => {
        console.log('JOIN_GAME_FEEDBACK', d)
      })

      socket.on(SocketEvent.GAME_STATE_CHANGED, (d: any) => {
        console.log(d)
      })

      socket.on(SocketEvent.START_GAME_FEEDBACK, (d: any) => {
        console.log('START_GAME_FEEDBACK', d)
        setCoordinate(d.data.coordinates)
        if (d.isOK) {
          setTableVisible(true)
        }
      })

      socket.on(SocketEvent.NEXT_PLAYER, (d: any) => {
        console.log('NEXT_PLAYER', d)
      })

      socket.on(SocketEvent.SELECT_COORDINATE_FEEDBACK, (d: any) => {
        console.log('SELECT_COORDINATE_FEEDBACK', d)
        if (d.isOK) {
          setCoordinate(d.data.coordinates)
        }
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

    switch (state.event) {
      case SocketEvent.CREATE_GAME:
        emitEvent(SocketEvent.CREATE_GAME, null)
        console.log("Emit CREATE_GAME")
        break
      case SocketEvent.JOIN_GAME:
        emitEvent(SocketEvent.JOIN_GAME, state.id)
        console.log("Emit JOIN_GAME")
        break
      case SocketEvent.START_GAME:
        emitEvent(SocketEvent.START_GAME, null)
        console.log("Emit START_GAME")
        break
      default:
        console.error("Not available!")
    }
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
              <Flex width="full" align="center" justifyContent="center">
                <Box p={2}>
                  <Box textAlign="center">
                    <Heading>Mine Sweeper</Heading>
                  </Box>
                  <Box my={4} textAlign="left" justifyItems="center">
                    <FormControl>
                      <FormLabel mb="2">Enter your name:</FormLabel>
                      <Input type="text" placeholder="John" variant="outline" width="-32px" />
                    </FormControl>
                    <Link to="/game" >
                      <Button width="full" mt={4} variantColor="green" variant="outline">
                        Continue
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Flex>
            </Route>
            <Route path="/game">
              <nav>
                <Box margin="5">
                  <Link to="/home">
                    <Button variantColor="orange" variant="outline">
                      Back
                      </Button>
                  </Link>
                  <Link to="/game/create">
                    <Button variantColor="green" variant="outline">
                      Create
                    </Button>
                  </Link>
                  <Link to="/game/join">
                    <Button variantColor="green" variant="outline">
                      Join
                    </Button>
                  </Link>
                  <Link to="/game/quick-game">
                    <Button variantColor="green" variant="outline">
                      Quick Game
                    </Button>
                  </Link>
                </Box>
              </nav>
              <Switch>
                <Route path="/game/create">
                  <Link to="/game/join">join</Link>
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
          </Switch>
        </ThemeProvider >
      </Router>
    </div>
  )

}

export default App;
