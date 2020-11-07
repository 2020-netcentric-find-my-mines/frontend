import React, { useState, useContext, useEffect, useCallback, } from "react"
import axios from "axios"
import { FormControl, Input, IconButton, Flex, Box, Text, Divider } from "@chakra-ui/core"
import { GameContext } from "../../contexts/useGame"
import { SocketContext } from "../../contexts/useSocket"
import firebase from "../../Firebase"
import { IChatData } from "../../types/interface"
import qs from 'querystring'

export default function Chat() {
    const CHAT_MAX_LENGTH = 20
    const CHAT_MAX_NUMBER = 8

    const [chat, setChat] = useState("")
    const { gameState } = useContext(GameContext)
    const [chatData, setChatData] = useState([] as IChatData[])
    const { socket } = useContext(SocketContext)

    const handleChange = (event: any) => {
        if (event.target.value.length < CHAT_MAX_LENGTH) {
            setChat(event.target.value)
        }
    }

    const onChatEvent = useCallback(() => {
        console.log(gameState.id)
        firebase.database().ref('games/' + gameState.id).on('value', (data) => {
            const retrievedChat = data.val()
            if (retrievedChat === null) {
                return
            }
            const cleanedChat: IChatData[] = []
            Object.keys(retrievedChat).forEach((key) => {
                cleanedChat.push({
                    username: retrievedChat[key].username, 
                    message: retrievedChat[key].message,
                })
            })
            setChatData(cleanedChat)
    
        }, () => {
            console.log('Error')
        })
    }, [gameState.id])

    useEffect(() => {
        onChatEvent()
    }, [onChatEvent])

    const handleSubmit = () => {
        console.log(gameState.id, gameState.name)
        if (chat === "" || chat === null) {
            return
        }
        setChat("")
        axios.post('https://asia-southeast2-findmymines.cloudfunctions.net/addChatMessage/',
            qs.stringify({
                message: chat,
                uid: socket.id,
                username: gameState.name,
            }),
            {
                params: {
                    gameId: gameState.id
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
    }

    const chatView: JSX.Element[] = []
    let key = 0
    chatData.forEach((chatDatum) => chatView.push(
        <Text key={key++}>{chatDatum.username} : {chatDatum.message}</Text>
    ))
    const truncatedChatView = chatView.slice(Math.max(0, chatView.length - CHAT_MAX_NUMBER))

    return (
        <Flex direction="column">
            <Box backgroundColor="gray" padding="2">
                <Flex fontWeight="bold" fontSize="xl" justifyContent="center" pb="2">
                    Scores
                </Flex>
                <Text>
                <span style={{ fontWeight: "bold" }}>{gameState.players[0].name?.length === 0 ? "Player 1" : gameState.players[0].name}: </span><span style={{ color: "orange" }}>{gameState.players[0].score}</span>
                </Text>
                <Text>
                <span style={{ fontWeight: "bold" }}>{gameState.players[1].name?.length === 0 ? "Player 2" : gameState.players[1].name}: </span><span style={{ color: "orange" }}>{gameState.players[1].score}</span>
                </Text>
                <Text fontWeight="light" pt={2}>
                    There are {gameState.players.length} players online
                </Text>
            </Box>
            <Divider orientation="horizontal"/>
            <Box backgroundColor="gray" padding="2">
                <Flex fontWeight="bold" fontSize="xl" justifyContent="center" pb="2">
                    Chat
                </Flex>
                {truncatedChatView}
                <FormControl flexDirection="row">
                    <Input placeholder="Chat..." value={chat} onChange={handleChange} />
                    <IconButton aria-label="Send chat" icon="check" size="sm" onClick={handleSubmit}></IconButton>
                </FormControl>
            </Box>
        </Flex>
    );
}