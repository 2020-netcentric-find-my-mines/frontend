import React, { useState, useContext, useEffect, useCallback, } from "react"
import axios from "axios"
import { FormControl, Input, IconButton, Flex, Text } from "@chakra-ui/core"
import { GameContext } from "../../contexts/useGame"
import { SocketContext } from "../../contexts/useSocket"
import firebase from "../../Firebase"
import { IChatData } from "../../types/interface"
import qs from 'querystring'

export default function Chat() {
    const [chat, setChat] = useState("")
    const { gameState } = useContext(GameContext)
    const [chatData, setChatData] = useState([] as IChatData[])
    const { socket } = useContext(SocketContext)

    const handleChange = (event: any) => {
        setChat(event.target.value)
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

    return (
        <Flex direction="column">
            {chatView}
            <FormControl>
                <Input placeholder="Chat..." value={chat} onChange={handleChange} />
                <IconButton aria-label="Send chat" icon="check" size="sm" onClick={handleSubmit}></IconButton>
            </FormControl>
        </Flex>
    );
}