import React, {useContext} from 'react'
import SocketEvent from '../socket-event'
import { Grid, Button } from '@chakra-ui/core'
import { GameContext } from '../contexts/useGame'

export default function Play(props: any) {
    const {gameState, gameDispatch} = useContext(GameContext)

    if (gameState.started) {
        return (<h2>Game not ready to start.</h2>)
    }

    const handleSelectCoordinate = (event: any) => {
        console.log("SELECT_COORDINATE", event.target.dataset.x, event.target.dataset.y)
        props.emitEvent(SocketEvent.SELECT_COORDINATE, {
            x: event.target.dataset.x,
            y: event.target.dataset.y,
        })
    }
    
    let grid = []
    for (let cellId: number = 0; cellId < 36; cellId++) {
        grid.push(
            <Button data-x="1" data-y="1" variantColor="green" onClick={handleSelectCoordinate}>Button</Button>
        )
    }

    return (
        <Grid 
            templateColumns="repeat(6, 1fr)" 
            templateRows="repeat(6, 1fr)" 
            gap={1}
        >
            {grid}
        </Grid>
    )
}