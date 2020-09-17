import React from 'react'
import GameModeButton from './GameModeButton'
import StartGameButton from './StartGameButton'
import { Link } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/core'

export default function Game(props: any) {

    return (
        <nav>
            <Box >
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <Button 
                        variantColor="orange" 
                        variant="outline" 
                        onClick={() => { props.setSelectedTab(["", false]) }}
                        margin="2"
                    >
                        Back
                    </Button>
                </Link>
                <GameModeButton 
                    link="/game/create" 
                    text="Create Room" 
                    isLoading={props.selectedTab[1]} 
                    loading={props.selectedTab} 
                    setLoading={props.setSelectedTab}
                    emitEvent={props.emitEvent}
                />
                <GameModeButton 
                    link="/game/join" 
                    text="Join Room" 
                    isLoading={props.selectedTab[1]}
                    loading={props.selectedTab} 
                    setLoading={props.setSelectedTab}
                    emitEvent={props.emitEvent}
                />
                <GameModeButton 
                    link="/game/quick-game" 
                    text="Quick Game" 
                    isLoading={props.selectedTab[1]} 
                    loading={props.selectedTab} 
                    setLoading={props.setSelectedTab}
                    emitEvent={props.emitEvent}
                />
                <StartGameButton
                    emitEvent={props.emitEvent}
                />
            </Box>
        </nav>
    )
}