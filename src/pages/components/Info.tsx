import React, { useContext } from 'react'
import { GameContext } from '../../contexts/useGame' 
import { Text } from '@chakra-ui/core'

export default function Info() {
    const { gameState } = useContext(GameContext)

    return (
        <Text>
            It is {gameState.currentPlayer}'s turn.
            {gameState.tick} seconds left!
        </Text>
    )
}