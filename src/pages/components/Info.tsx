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
                Game ID: {gameState.id}
            </Text>
            <Text mb={4}>
                Player: {gameState.name}
            </Text>
            <Text>
                It is <span style={{ color: gameState.currentPlayer === socket.id ? "orange" : ""}}>{gameState.currentPlayer === socket.id ? "YOUR" : gameState.currentPlayerName + "'s"}</span> turn.
            </Text>
            <Text mb={4}>
                {gameState.currentPlayer === socket.id ? `${gameState.tick} seconds left!` : "Please wait..."}
            </Text>
        </Flex>
    )
}
