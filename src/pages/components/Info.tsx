import React, { useContext } from 'react'
import { GameContext } from '../../contexts/useGame'
import { SocketContext } from '../../contexts/useSocket'
import { Text, Flex, Heading } from '@chakra-ui/core'

export default function Info() {
    const { gameState } = useContext(GameContext)
    const { socket } = useContext(SocketContext)

    return (
        <Flex alignItems="center" flexDirection="column">
            <Heading mb={4}>
                Find My Mines
            </Heading>
            <Text>
                It is {gameState.currentPlayer === socket.id ? "YOUR" : gameState.currentPlayerName + "'s"} turn.
            </Text>
            <Text>
                {gameState.currentPlayer === socket.id ? `${gameState.tick} seconds left!` : "Please wait..."}
            </Text>
            <Text mb={4}>
                Player: {gameState.name}
            </Text>
        </Flex>
    )
}
