import React from 'react'
import { Button } from '@chakra-ui/core'
import SocketEvent from '../socket-event'

export default function StartGameButton(props: any) {
    const emitEvent = props.emitEvent;

    function startGame() {
        console.log("Emit START_GAME")
        emitEvent(SocketEvent.START_GAME, null)
    }

    return (
        <Button
            variantColor="green"
            variant="outline"
            onClick={startGame}
            margin="2"
        >
            Start Game
        </Button>
    )

}