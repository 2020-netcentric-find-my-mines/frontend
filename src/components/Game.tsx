import React from 'react'
import SocketEvent from '../socket-event'
import GameModeButton from './GameModeButton'
import { Link } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/core'

export default function Game(props: any) {

    return (
        <nav>
            <Box margin="5">
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <Button 
                        variantColor="orange" 
                        variant="outline" 
                        onClick={() => { props.setLoading(["", false]) }}
                    >
                        Back
                    </Button>
                </Link>
                <GameModeButton 
                    link="/game/create" 
                    text="Create" 
                    isLoading={props.loading[1]} 
                    loading={props.loading} 
                    setLoading={props.setLoading}
                />
                <GameModeButton 
                    link="/game/join" 
                    text="Join" 
                    isLoading={props.loading[1]}
                    loading={props.loading} 
                    setLoading={props.setLoading} 
                />
                <GameModeButton 
                    link="/game/quick-game" 
                    text="Quick Game" 
                    isLoading={props.loading[1]} 
                    loading={props.loading} 
                    setLoading={props.setLoading}
                />
            </Box>
        </nav>
    )
}