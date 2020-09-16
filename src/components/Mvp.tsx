import React from 'react'
import Timer from './Timer'
import Table from './Table'
import Board from './Board'
import emitSocketEvent from '../logics/handleSubmit'

export default function Mvp(props: any) {

    const handleInputChange = (event: any) => {
        event.persist()
        props.setState((prevState: any) => {
          return ({
            ...prevState,
            [event.target.name]: event.target.value,
          })
        })
      }
    
    const handleSubmit = (event: any) => {
        event.preventDefault()

        console.log(props.state)

        emitSocketEvent(props.state.event, props.emitEvent, props.state.id)
    }

    return (
        <div className='App'>

            <h1>Minimum Viable Product for Find My Mines</h1>
            <p>Check console log for debugging</p>
            <Timer tick={props.tick} />
            <p>Table key: A for avalable, B for bomb, E for empty</p>
            <form onSubmit={handleSubmit}>
                <select name="event" value={props.state.event} onChange={handleInputChange}>
                <option value="">---Select Event---</option>
                <option value="CREATE_GAME">Create Game</option>
                <option value="JOIN_GAME">Join Game</option>
                <option value="QUICK_MATCH">Quick Match</option>
                <option value="SELECT_COORDINATE">Select Coordinate</option>
                <option value="START_GAME">Start Game</option>
                <option value="disconnect">Disconnect</option>
                </select>
                <input type="text" name="id" placeholder="Game ID" value={props.state.id} onChange={handleInputChange} />
                <input type="text" name="x" placeholder="X coordinate" value={props.state.x} onChange={handleInputChange} />
                <input type="text" name="y" placeholder="Y coordinate" value={props.state.y} onChange={handleInputChange} />
                <button>Submit</button>
            </form>

            <Table width="6" height="6" visible={props.tableVisible} coordinate={props.coordinate} emitEvent={props.emitEvent}/>
            <Board />
        </div>
    )
}