import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/core'
import SocketEvent from '../socket-event'
import { GameContext } from '../contexts/useGame'

export default function StartGameButton(props: any) {
    const emitEvent = props.emitEvent;

    function startGame() {
        emitEvent(SocketEvent.START_GAME, null)
    }

    return (
        <Link to="/play">
            <Button
                variantColor="green"
                variant="outline"
                onClick={startGame}
                margin="2"
            >
                Start Game
            </Button>
        </Link>
    )

}