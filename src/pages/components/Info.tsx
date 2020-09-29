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
                It is {gameState.currentPlayer === socket.id ? "your" : "other player's"} turn.
            </Text>
            <Text mb={4}>
                {gameState.currentPlayer === socket.id ? `${gameState.tick} seconds left!` : "Please wait..."}
            </Text>
        </Flex>
    )
}